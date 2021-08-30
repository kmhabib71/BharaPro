import React, { useEffect, useState } from "react";
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
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createListing } from "../../../src/graphql/mutations";
const AddItemValueScreen = (props) => {
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

  useEffect(() => {
    const addItems = async () => {
      const newItem = {
        id: "03",
        title: "2Acer computer for rent",
        category: "Office Equipment",
        description:
          "Acer2 samsung computer is about rent for per day. Feel free to reach for chat",
        images:
          "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        value: "35000",
      };

      await API.graphql(graphqlOperation(createListing, { input: newItem }));
    };

    addItems();
  }, []);

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
        onPress={() => navigation.navigate("AddItemDetails")}>
        <Pressable
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#c3c3c3",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("AddItemDetails")}>
          <Text>Add Item values</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default AddItemValueScreen;
