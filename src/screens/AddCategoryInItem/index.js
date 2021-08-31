import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import styles from "./style";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createListing } from "../../../src/graphql/mutations";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const AddCategoryInItem = (props) => {
  const [catState, setCatState] = useState({
    names: [
      {
        id: 0,

        fullIcon: (
          <Entypo style={styles.catIcon} name="home" size={24} color="black" />
        ),
        name: "অ্যাপার্টমেন্ট/বাসা/রুম",
      },
      {
        id: 1,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="car-sport"
            size={24}
            color="black"
          />
        ),
        name: "গাড়ি",
      },
      {
        id: 2,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="room-preferences"
            size={24}
            color="black"
          />
        ),
        name: "গৃহস্থলি আইটেম",
      },
      {
        id: 3,
        fullIcon: (
          <Entypo
            style={styles.catIcon}
            name="folder-music"
            size={24}
            color="black"
          />
        ),
        name: "মিউজিক এবং এক্সেসরিজ",
      },
      {
        id: 4,
        fullIcon: (
          <Fontisto
            style={styles.catIcon}
            name="photograph"
            size={24}
            color="black"
          />
        ),
        name: "ফটোগ্রাফি",
      },

      {
        id: 5,
        fullIcon: (
          <Entypo
            style={styles.catIcon}
            name="folder-music"
            size={24}
            color="black"
          />
        ),
        name: "মিউজিক এবং এক্সেসরিজ",
      },
      {
        id: 6,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="card-travel"
            size={24}
            color="black"
          />
        ),
        name: "ট্রাভেল এক্সেসরিজ",
      },
      {
        id: 7,
        fullIcon: (
          <Entypo style={styles.catIcon} name="book" size={24} color="black" />
        ),
        name: "বই",
      },
      {
        id: 8,
        fullIcon: (
          <AntDesign
            style={styles.catIcon}
            name="paperclip"
            size={24}
            color="black"
          />
        ),
        name: "অফিস সরঞ্জামাদি",
      },
      {
        id: 9,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="desktop"
            size={24}
            color="black"
          />
        ),
        name: "কম্পিউটার এবং এক্সেসরিজ",
      },
      {
        id: 11,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="drone"
            size={24}
            color="black"
          />
        ),
        name: "ড্রোন",
      },
      {
        id: 12,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="cellphone-link"
            size={24}
            color="black"
          />
        ),
        name: "ফোন এবং লেপটপ",
      },
      {
        id: 13,
        fullIcon: (
          <FontAwesome5
            style={styles.catIcon}
            name="baby-carriage"
            size={24}
            color="black"
          />
        ),
        name: "কিড্স এবং বেবি আইটেম",
      },
      {
        id: 14,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="sports-baseball"
            size={24}
            color="black"
          />
        ),
        name: "খেলাধুলা আইটেম",
      },
      {
        id: 15,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="miscellaneous-services"
            size={24}
            color="black"
          />
        ),
        name: "অন্যান্য",
      },
    ],
  });
  const navigation = useNavigation();
  function alertItemName(item) {
    // alert(item.name);
    navigation.navigate("AddItemDetails", {
      catItemid: item.id,
      catItemName: item.name,
    });
  }
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "white", height: "100%", color: "black" }}>
        <View>
          {catState.names.map((item, index) => (
            <Pressable
              key={item.id}
              style={styles.container}
              android_ripple={{ color: "grey" }}
              onPress={() => alertItemName(item)}>
              {item.fullIcon}
              <Text style={styles.text}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AddCategoryInItem;
