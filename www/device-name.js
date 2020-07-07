'use strict';

var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var cordova = require('cordova');

channel.createSticky('onDeviceNameReady');
// Tell cordova channel to wait on the DeviceNameReady event
channel.waitForInitialization('onDeviceNameReady');

function DeviceName() {
    this.name = null;
    var me = this;
    channel.onCordovaReady.subscribe(function() {
        me.get(function(names) {
            me.name = names.name;
            me.bluetoothName = names.bluetoothName;
            me.deviceName = names.deviceName;

            if (window.device && !window.device.name && !window.device.otherNames) {
                window.device.name = names.name;
                window.device.otherNames = {
                    deviceName: names.deviceName,
                    bluetoothName: names.bluetoothName
                };
            }
            channel.onDeviceNameReady.fire();
        }, function(e) {
            utils.alert("[DeviceName] Error initializing Cordova: " + e);
        });
    });
}

DeviceName.prototype.get = function(successCallback, errorCallback) {
    function normalizeResult(nameOrObj) {
        if (nameOrObj == null || typeof nameOrObj === 'string') {
            return {
                name: nameOrObj,
                bluetoothName: null,
                deviceName: nameOrObj
            };
        }

        return nameOrObj;
    }

    argscheck.checkArgs('fF', 'DeviceName.get', arguments);
    exec(function(result) {
        return successCallback.call(this, normalizeResult(result));
    }, errorCallback, "DeviceName", "get", []);
};

module.exports = new DeviceName();
