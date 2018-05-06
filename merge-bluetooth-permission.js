#!/usr/bin/env node

module.exports = function(context) {

    var fs = context.requireCordovaModule('fs');

    var path = context.requireCordovaModule('path');

    var platformRoot = path.join(context.opts.projectRoot, 'platforms/android');

    var manifestFile = path.join(platformRoot, 'AndroidManifest.xml');

    if (fs.existsSync(manifestFile)) {
        fs.readFile(manifestFile, 'utf8', function (err,data) {
            if (err) {
                throw new Error('Unable to read AndroidManifest.xml: ' + err);
            }
            var permissions = data.match(/<uses-permission(.*?)\/>/g);
            var bluetoothPermissions = permissions.filter(permission => permission.toUpperCase().indexOf('ANDROID.PERMISSION.BLUETOOTH') > -1);
            if (bluetoothPermissions.length > 1) {
                var permissionWithoutMaxSDK = bluetoothPermissions.find(permission => permission.indexOf('android:maxSdkVersion') == -1);
                if (permissionWithoutMaxSDK) {
                    var result = data.replace('<uses-permission android:maxSdkVersion="18" android:name="android.permission.BLUETOOTH" />', '');
                    fs.writeFile(manifestFile, result, 'utf8', function (err) {
                        if (err) {
                            throw new Error('Unable to write into AndroidManifest.xml: ' + err);
                        }
                    });
                }
            }
        });
    }

};