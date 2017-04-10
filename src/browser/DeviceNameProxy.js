
module.exports = {

    get: function getDeviceName(success, fail) {
        return success({
            name: "Browser"
        });
    }
};

require("cordova/exec/proxy").add("DeviceName", module.exports);