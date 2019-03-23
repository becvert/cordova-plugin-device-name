## [1.3.5] - 2019-03-23
- 'requireCordovaModule' isn't supported anymore on cordova 9

## [1.3.4] - 2018-07-23
- [Android] improving merge of bluetooth permissions (white spaces)

## [1.3.3] - 2018-05-24
- [Android] using Global system settings with API 24+.
- [Android] fixing duplicate declarations of bluetooth permission

## [1.3.2] - 2017-10-14
- [Android] fixed the maxSdkVersion of permission android.permission.BLUETOOTH must be at least 18
- [Android] returns null if device name not found instead of an alert dialog

## [1.3.1] - 2017-10-13
- [Android] reverted to using BLUETOOTH permission for devices with API 17 and below.
- [Android] BluetoothAdapter required again.

## [1.3.0] - 2017-09-07
- [Android] removed BLUETOOTH permission using Global and Secure system settings instead.