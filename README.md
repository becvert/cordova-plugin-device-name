# Cordova Device Name Plugin

This plugin allows you to get the user-friendly name of the device.

On Android, a bluetooth adapter must be present.

## Installation ##

In your application project directory:

```bash
cordova plugin add cordova-plugin-device-name
```


## Usage ##

```javascript
var deviceName = cordova.plugins.deviceName;
console.log(deviceName.name) // e.g: Becvert's iPad
```

## Credits

All the credits go to the official cordova-plugin-device plugin.

## Licence ##

The MIT License
