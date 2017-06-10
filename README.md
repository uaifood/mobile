![Build status](https://www.bitrise.io/app/ce10dbb6667f0d1a/status.svg?token=2VnG0D4gevqF_I8k6LRL8g&branch=master)

# Setup your environment
First of all clone the master repository:

    git clone git@github.com:uaifood/mobile.git uai_food_mobile
    cd uai_food_mobile

Install `nvm` (this step is optional but recommended).

Just skip this step if you already have `node 7.1.0` or `nvm` already installed.

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    nvm install 7.1.0
    nvm alias default 7.1.0

Install necessary packages to run the project:

    npm install

Install `watchman`:

    brew install watchman

If you don't have `Homebrew` you'll have to install using the following command:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

## Linter

We use `ESlint` on our project so you'll need to install the package globally to make it work:

    npm install -g eslint

You'll need to install a proper eslint plugin to you code editor, so you'll need to search for the one that fits you better and make the necessary setup to make it work.

You can execute the linter check on your terminal either.

This way will check the whole project looking for linter problems:

    npm run lint

# Setting up Android

The first step is download and install `Android Studio` from:

    https://developer.android.com/studio/index.html

After that, you will be able to install emulator images.

Please use the following guide to configure the `AVDs (Android Virtual Device)`:

    https://developer.android.com/studio/run/managing-avds.html

Once you have installed some AVDs, you can see them on the CLI using the command:

    $ANDROID_HOME/emulator/emulator -list-avds

Start the emulator using the following command:

    $ANDROID_HOME/emulator/emulator -avd Nexus_5_API_25 -netdelay none -netspeed full

In this case, you need to replace `Nexus_5_API_25` by an image that you have installed.

Now you can start developing by running this command:

    npm run android

# Setting up iOS

First step is download and install `Xcode` from:

    https://itunes.apple.com/br/app/xcode/id497799835?l=en&mt=12

After install you can just open `Xcode` and accept the license or just run:

    sudo xcodebuild -license accept

Now you can start developing by running this command:

    npm run ios

## Possible issue on Xcode:

If your project doesn't start indicating that the Xcode could not be found you'll need to use this instruction to try to solve the problem.

Could happen that after you install `Xcode` and accept the license you'll need to setup manually the `Command Line Tools`.

Open `Xcode` and on top menu go to `Xcode > Preferences > Locations` and select the Xcode version on the `Command Line Tools` dropdown if it's not selected.

# Tests

To run the tests use the following command:

    npm test
