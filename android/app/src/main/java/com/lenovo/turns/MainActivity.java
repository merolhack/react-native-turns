package com.lenovo.turns;

import android.os.Bundle;

import com.facebook.react.ReactPackage;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.lenovo.turns.generated.ExponentBuildConstants;
import host.exp.expoview.ExponentActivity;

public class MainActivity extends ExponentActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@merolhack/turns";
  }

  @Override
  public String developmentUrl() {
    return ExponentBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("22.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

/*    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }*/

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
}
