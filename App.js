import React, { Component } from 'react';
import { View, Text } from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import Login from './src/screens/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("ab171d32-7243-4d81-b770-6f8dd0a78346", {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2
    });
    OneSignal.inFocusDisplaying(2);

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

  render() {
    return (
      // <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      //   <Text>Hello One Signal</Text>
      // </View>
      <View style={{flex:1}}>
        <Login/>
      </View>
    );
  }
}
