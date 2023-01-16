Configuring for Production:
 - Set permissions
 - App Name and Identifier
 - Env variables (ex: API keys)
 - Icons and Splash screen

To publish Expo apps we user expo EAS.
We can use EAS to build the app in the cloud and then publish to stores
if we want to.

Steps for Publishing:

1. Inside app.json change the important values:
 - name: A name for the app in the store.
 - version: This is seen by the users in the store.
   -- We also need to set the specific buildNumber for each OS as the store uses it for
      internal referencing. This number is not seen by the users:
      -> buildNumber (ios): It's a string that goes inside the ios property in app.json - "1.0.0".
      -> versionCode (android): It's an Integer that goes inside the android property in app.json - 1.
2. Set orientation, splash and icon for your app.
 - To know the dimensions of the splash icon and screen (same for both) is the image that users will see
   when the app is in their homescreen and when they open it. Search for "expo icons splash" to find
   Expo docs for more details on dimensions and other things.
3. "updates" property is to handle app updates. Expo allows us to do updates using their cloud without
   deploying to the store.
4. Signup / Login into expo.dev
5. Install eas-cli in the project: npm install -g eas-cli.
6. Log in the expo account in the terminal using: eas login
7. Configure the project to build it using: eas build:configure
8. Select "All" option to create a project for both Android and iOS.

Build installable APK for Android simulators and devices:
1. Add
	"android": {
          "buildType": "apk",
      	},
   inside the build.preview property in "eas.json" file.
2. Run "eas build -p android --profile preview" to generate the build for android
3. Once it's done, the file to download will be available in the Build section of the expo.dev website
   and also the command will output a link for download.
4. To build the app so it can be released in the store, then we must use the "build.production" property in the
   "eas.json" file and follow the docs intructions on what to add in there so we can get the aab binary files.

Build for iOS - Paid developer account is needed:
1. Add
   "ios" {
     "simulator": true
   },
   inside the build.preview property in "eas.json" file. It can be below the android one.
2. Run "eas build -p ios --profile preview" to generate the build for iOS simulator.
3. Once it's done, the file to download will be available in the Build section of the expo.dev website
   and also the command will output a link for download.
4. To build the app so it can be released in the store, then we must use the "build.production" property in the
   "eas.json" file and follow the docs intructions on what to add in there so we can get the aab binary files.
