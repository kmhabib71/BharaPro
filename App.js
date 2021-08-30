// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import type { Node } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import Router from "./src/navigation/Router";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { I18n } from "aws-amplify";
I18n.setLanguage("en");
const dict = {
  en: {
    "Sign In": "সাইন ইন করুন",
    "Sign Up": "সাইন আপ করুন",
    Username: "ইউজারনেইম বা ইমেইল",
    Password: "পাসওয়ার্ড",
    "Forgot Password": "পাসওয়ার্ড ভুলে গেছেন?",
    "Sign in to your account": "আপনার একাউন্টে সাইন ইন করুন",
    "Please Sign In / Sign Up": "সাইন ইন / সাইন আপ করুন",
    "Enter your username": "আপনার ইউজারনেইম প্রবেশ করান",
    "Enter your password": "আপনার পাসওয়ার্ড প্রবেশ করান",
    Email: "ইমেইল",
    "Phone Number": "মোবাইল নাম্বার",
    "Confirm a Code": "কোড কনফার্ম করুন",
    "Confirmation Code": "কোড কনফার্ম করুন",
    "Enter your confirmation code": "আপনার মেইলে পাঠানো কোডটি প্রবেশ করান",
    Confirm: "কনফার্ম",
    "Resend code": "পুনরায় কোড পাঠান",
    "Back to Sign In": "সাইন ইন এ ফিরে যান",
    "Confirm Sign Up": "সাইন আপ কনফার্ম করুন",
    "Create a new account": "নতুন একাউন্ট খুলুন",
    "Reset your password": "পাসওয়ার্ড রিসেট করুন",
    Send: "কোড পাঠান",
  },
};

I18n.putVocabularies(dict);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

import { withAuthenticator, Authenticator } from "aws-amplify-react-native";
// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';
// import feed from './assets/data/feed';
// import SearchResultScreen from './src/screens/searchResults';
// import DestinationSearchResultScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';
// const post1 = feed[0];
// const post2 = feed[2];
// dd;
const App: () => Node = () => {
  return (
    <>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Router />
        {/* <SafeAreaView style={{backgroundColor: 'white'}}> */}
        {/* <HomeScreen /> */}
        {/* <Post post={post2} /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchResultScreen /> */}
        {/* <GuestsScreen /> */}
        {/* </SafeAreaView> */}
      </View>
    </>
  );
};

export default withAuthenticator(App, { usernameAttributes: "email" });
// export default App;
