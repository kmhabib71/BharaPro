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
import React, { useEffect, useState } from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Auth, Hub } from "aws-amplify";

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
  /* Import the Amplify Auth API */

  /* Create the form state and form input state */

  let formInputState = {
    username: "",
    password: "",
    email: "",
    verificationCode: "",
  };
  const [username, setUsername] = useState(
    (Math.random() + 1).toString(36).substring(7)
  );
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [formState, setFormState] = useState("signUp");
  /* onChange handler for form inputs */
  function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
  }

  /* Sign up function */
  // let randomUsername = (Math.random() + 1).toString(36).substring(7);

  async function signUp() {
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
        },
      });
      /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
      setFormState("confirmSignUp");
    } catch (err) {
      console.log({ err });
    }
  }

  /* Confirm sign up function for MFA */
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, verificationCode);
      /* Once the user successfully confirms their account, update form state to show the sign in form*/
      setFormState("signIn");
    } catch (err) {
      console.log({ err });
    }
  }

  /* Sign in function */
  async function signIn() {
    try {
      await Auth.signIn(email, password);
      /* Once the user successfully signs in, update the form state to show the signed in state */
      console.log("Sign in success");
      setFormState("signedIn");
    } catch (err) {
      console.log({ err });
    }
  }
  const logout = () => {
    Auth.signOut();
    setFormState("signIn");
  };
  Hub.listen("auth", (data) => {
    const event = data.payload.event;
    console.log("event:", event);
    // if (event === "signOut") {
    //   console.log('user signed out...');
    // }
    switch (data.payload.event) {
      case "signIn":
        setFormState("signedIn");
        console.log("user signed in");
        break;
      case "signUp":
        setFormState("confirmSignUp");
        // console.log("user signed up");
        break;
      case "signOut":
        // console.log("user signOut");
        setFormState("signIn");
        break;
      case "signIn_failure":
        // console.log("user sign in failed");
        break;
      case "configured":
        // console.log("the Auth module is configured", formState);
        setFormState("signIn");
    }
  });
  // async function getUserInfo() {
  //   const user = await Auth.currentAuthenticatedUser();
  //   console.log("attributes:", user.username);
  // }
  // getUserInfo();
  async function onAppLoad() {
    const user = await Auth.currentAuthenticatedUser();
    // console.log("user:", user);
    if (user) {
      // formState = "signedIn";
      setFormState("signedIn");
      console.log("signedIn and email is: ", user.attributes.email);
    } else {
      // formState = "signUp";
      // setFormState("signUp");
      console.log("Not signedIn");
    }
  }
  useEffect(() => {
    onAppLoad();
  });

  return (
    <>
      <View style={{ marginTop: 100 }}>
        {formState === "signUp" ? (
          <View>
            <TextInput
              name="Email"
              onChangeText={(text) => setEmail(text)}
              placeholder="write email"></TextInput>
            <TextInput
              name="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="write password"></TextInput>
            <Button onPress={signUp} title="Sign Up"></Button>
          </View>
        ) : (
          <Text></Text>
        )}
        {formState === "confirmSignUp" ? (
          <View>
            {/* <TextInput
              name="email"
              onChangeText={(text) => setEmail(text)}
              placeholder="write email"></TextInput> */}

            <TextInput
              name="verificationCode"
              onChangeText={(text) => setVerificationCode(text)}
              placeholder="Confermation Code"></TextInput>
            <Button onPress={confirmSignUp} title="Confirm Sign Up" />
          </View>
        ) : (
          <Text></Text>
        )}
        {formState === "signIn" ? (
          <View>
            <TextInput
              name="email"
              onChangeText={(text) => setEmail(text)}
              placeholder="write Email"></TextInput>
            <TextInput
              name="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="write password"></TextInput>

            <Button onPress={signIn} title="Sign In" />
          </View>
        ) : (
          <Text></Text>
        )}
        {formState === "signedIn" ? (
          <View>
            <Text>Welcome to my app</Text>
            <Button onPress={logout} title="Logout"></Button>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    </>
  );
};

// export default withAuthenticator(App, { usernameAttributes: "email" });
export default App;
