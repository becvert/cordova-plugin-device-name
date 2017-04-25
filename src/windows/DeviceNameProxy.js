
module.exports = {

    get: function getDeviceName(success, fail) {
        if (!Windows
            || !Windows.Security
            || !Windows.Security.ExchangeActiveSyncProvisioning
            || !Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation) {
            return fail(new Error("WinRT API Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation not found"));
        }

        var info = new Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation();
        return success(info.friendlyName);
    }
};

require("cordova/exec/proxy").add("DeviceName", module.exports);