## [1.3.2] - 2017-10-14
- [Android] fixed the maxSdkVersion of permission android.permission.BLUETOOTH must be at least 18
- [Android] returns null if device name not found instead of an alert dialog

## [1.3.1] - 2017-10-13
- [Android] reverted to using BLUETOOTH permission for devices with API 17 and below.
- [Android] BluetoothAdapter required again.

## [1.3.0] - 2017-09-07 
- [Android] removed BLUETOOTH permission using Global and Secure system settings instead.