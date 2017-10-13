package net.becvert.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import android.bluetooth.BluetoothAdapter;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;

public class DeviceName extends CordovaPlugin {

    private static final String TAG = "DeviceName";

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        if ("get".equals(action)) {
            String name = this.getName();
            if (name == null) {
                callbackContext.error("could not retrieve the name of the device");
            } else {
                callbackContext.success(name);
            }
        } else {
            return false;
        }
        return true;
    }

    public String getName() {
        String name = null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2) {
            Log.d(TAG, "bluetooth_name");
            name = Settings.Secure.getString(cordova.getActivity().getContentResolver(), "bluetooth_name");
        } else {
            BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
            if (mBluetoothAdapter != null) {
                Log.d(TAG, "bluetooth adapter");
                name = mBluetoothAdapter.getName();
            }
        }
        return name;
    }

}
