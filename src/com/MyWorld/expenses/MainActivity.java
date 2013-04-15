package com.MyWorld.expenses;

import android.os.Bundle; 
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setIntegerProperty("loadUrlTimeoutValue", 60000);
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
