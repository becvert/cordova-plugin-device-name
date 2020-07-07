package net.becvert.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.bluetooth.BluetoothAdapter;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;

public class DeviceName extends CordovaPlugin {

    private static final String TAG = "DeviceName";

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        if ("get".equals(action)) {
            try {
                JSONObject names = this.getNames();
                callbackContext.success(names);
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

    public JSONObject getNames() throws JSONException {
        String name = null;
        String bluetoothName = null;
        String deviceName = null;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            bluetoothName = Settings.Secure.getString(cordova.getActivity().getContentResolver(), "bluetooth_name");
            name = bluetoothName;
            Log.d(TAG, "bluetooth_name " + name);

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                deviceName = Settings.Global.getString(cordova.getActivity().getContentResolver(), "device_name");
                if (name == null) {
                    name = deviceName;
                }
                Log.d(TAG, "device_name " + name);
            }
        } else {
            BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
            if (mBluetoothAdapter != null) {
                bluetoothName = mBluetoothAdapter.getName();
                name = bluetoothName;
                Log.d(TAG, "bluetooth adapter " + name);
            }
        }

        JSONObject names = new JSONObject();
        names.put("name", name);
        names.put("bluetoothName", bluetoothName);
        names.put("deviceName", deviceName);

        return names;
    }
}
