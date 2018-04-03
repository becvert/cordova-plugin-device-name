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
            try {
                String name = this.getName();
                callbackContext.success(name);
            } catch (Exception e) {
                Log.e(TAG, e.getMessage(), e);
                callbackContext.error(e.getMessage());
                return false;
            }
        } else {
            return false;
        }
        return true;
    }

    public String getName() {
        String name = null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                name = Settings.Global.getString(cordova.getActivity().getContentResolver(), "device_name");
                Log.d(TAG, "device_name " + name);
            }
            if (name == null) {
                name = Settings.Secure.getString(cordova.getActivity().getContentResolver(), "bluetooth_name");
                Log.d(TAG, "bluetooth_name " + name);
            }
        } else {
            BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
            if (mBluetoothAdapter != null) {
                name = mBluetoothAdapter.getName();
                Log.d(TAG, "bluetooth adapter " + name);
            }
        }
        return name;
    }

}
