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
        me.get(function(name) {
            me.name = name;
            if (window.device && !window.device.name) {
                window.device.name = name;
            }
            channel.onDeviceNameReady.fire();
        }, function(e) {
            utils.alert("[DeviceName] Error initializing Cordova: " + e);
        });
    });
}

DeviceName.prototype.get = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'DeviceName.get', arguments);
    exec(successCallback, errorCallback, "DeviceName", "get", []);
};

module.exports = new DeviceName();
