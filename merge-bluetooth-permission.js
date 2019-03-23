#!/usr/bin/env node

module.exports = function(context) {

    var fs = require('fs');

    var path = require('path');

    var platformRoot = path.join(context.opts.projectRoot, 'platforms/android');

    var preCordova7ManifestFile = path.join(platformRoot, 'AndroidManifest.xml');

    var cordova7ManifestFile = path.join(platformRoot, 'app/src/main/AndroidManifest.xml');

    var manifestEdit = function(file) {
      fs.readFile(file, 'utf8', function (err,data) {
        if (err) {
            throw new Error('Unable to read AndroidManifest.xml: ' + err);
        }
        var permissions = data.match(/<uses-permission(.*?)\/>/g);
        var bluetoothPermissions = permissions.filter(permission => permission.indexOf('android:name="android.permission.BLUETOOTH"') > -1);
        if (bluetoothPermissions.length > 1) {
            var permissionWithoutMaxSDK = bluetoothPermissions.find(permission => permission.indexOf('android:maxSdkVersion') == -1);
            if (permissionWithoutMaxSDK) {
                var result = data.replace(/<uses-permission android:maxSdkVersion="18" android:name="android\.permission\.BLUETOOTH"\s?\/>/, '');
                fs.writeFile(file, result, 'utf8', function (err) {
                    if (err) {
                        throw new Error('Unable to write into AndroidManifest.xml: ' + err);
                    }
                });
            }
        }
      });
    }

    if (fs.existsSync(preCordova7ManifestFile)) {
      manifestEdit(preCordova7ManifestFile)
    } else if (fs.existsSync(cordova7ManifestFile)) {
      manifestEdit(cordova7ManifestFile)
    }

};
