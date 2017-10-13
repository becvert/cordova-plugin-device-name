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

console.log(deviceName.name) // e.g: Becvert's iPad

deviceName.get(function success(name) {
    console.log(name);
}, function failure(error) {
    console.log(error);
});
```

if you installed cordova-plugin-device you can use:

```javascript
window.device.name
```

## Credits

All the credits go to the official cordova-plugin-device plugin.

## Licence ##

The MIT License
