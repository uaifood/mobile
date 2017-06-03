https://www.bitrise.io/app/ce10dbb6667f0d1a/status.svg?token=2VnG0D4gevqF_I8k6LRL8g&branch=master

# Setting up Android

The first step is downloading Android Studio. The link is https://developer.android.com/studio/index.html.

After that, you will be able to install emulator images. Please use the following guide to configure the AVDs (Android Virtual Device): https://developer.android.com/studio/run/managing-avds.html

Once you have installed some AVDs, you can see them on the CLI using the command:
    $ANDROID_HOME/emulator/emulator -list-avds

Start the emulator using the following command:
    $ANDROID_HOME/emulator/emulator -avd Nexus_5_API_25 -netdelay none -netspeed full

In this case, you need to replace `Nexus_5_API_25` by an image that you have installed.

Now you can start developing by running this command:

    react-native run-android
