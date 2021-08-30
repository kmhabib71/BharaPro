import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  Modal,
} from "react-native";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Auth } from "aws-amplify";
const ProfileScreen = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "white", height: "100%", color: "black" }}>
      <Pressable
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#c3c3c3",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={logout}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
