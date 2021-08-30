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
import { FontAwesome } from "@expo/vector-icons";
import styles from "../Home/style";
const ListingItems = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const goToAddItemDetailsPage = () => {
    navigation.navigate("Home", {
      screen: "ListingRoute",
      params: {
        screen: "AddItemDetails",
      },
    });
  };
  return (
    <View style={{ backgroundColor: "white", height: "100%", color: "black" }}>
      <View
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Pressable
          style={{
            display: "flex",
            paddingHorizontal: 31.25,
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fec85c",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("ListingRoute")}>
          <FontAwesome
            name="plus-square-o"
            size={25}
            color="black"
            style={{ color: "black", marginRight: 16 }}
          />

          <Text style={{ color: "black", fontSize: 20 }}>আইটেম যোগ করুন</Text>
        </Pressable>
      </View>

      {/* <Pressable
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#c3c3c3",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("AddItemDetails")}>
        <Text>Add Items</Text>
      </Pressable> */}
    </View>
  );
};

export default ListingItems;
