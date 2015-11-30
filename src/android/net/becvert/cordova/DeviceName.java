/*
 * Cordova Device Name Plugin
 *
 * Device Name plugin for Cordova/Phonegap 
 * by Sylvain Brejeon
 */

package net.becvert.cordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.bluetooth.BluetoothAdapter;

public class DeviceName extends CordovaPlugin {

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("get".equals(action)) {
            JSONObject r = new JSONObject();
            r.put("name", this.getName());
            callbackContext.success(r);
        } else {
            return false;
        }
        return true;
    }

    public String getName() {
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (mBluetoothAdapter == null) {
            return null;
        } else {
            return mBluetoothAdapter.getName();
        }
    }

}
