# Cordova Device Name Plugin

This plugin allows you to get the user-friendly name of the device.

On Android, a bluetooth adapter is required. Android emulator does not have bluetooth capabilities!

[CHANGELOG](https://github.com/becvert/cordova-plugin-device-name/blob/master/CHANGELOG.md)

## Installation ##

In your application project directory:

```bash
cordova plugin add cordova-plugin-device-name
```


## Usage ##

```javascript
var deviceName = cordova.plugins.deviceName;

// on iOS
console.log(deviceName.name) // e.g: "Becvert's iPad"
console.log(deviceName.bluetoothName) // e.g: null
console.log(deviceName.deviceName) // e.g: "Becvert's iPad"

// on Android
console.log(deviceName.name) // e.g: "HUAWEI P20 lite"
console.log(deviceName.bluetoothName) // e.g: "HUAWEI P20 lite"
console.log(deviceName.deviceName) // e.g: "ANE-LX1"

deviceName.get(function success(names) {
    console.log(names.name);
}, function failure(error) {
    console.log(error);
});
```

On Android, you'll get additional names you can choose from: `deviceName` and `bluetoothName`.
`bluetoothName` is the user-defined name for the device which is often preferable to `deviceName`
which is often just the model codename of the device.

On Android, `name` defaults to `bluetoothName`, if available.

If you installed cordova-plugin-device you can use:

```javascript
window.device.name
```

You can access `deviceName` and `bluetoothName` from cordova-plugin-device on Android like this:

```javascript
window.device.otherNames.deviceName
window.device.otherNames.bluetoothName
```

## Credits

All the credits go to the official cordova-plugin-device plugin.

## Licence ##

The MIT License
