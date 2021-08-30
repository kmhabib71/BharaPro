import React, { useState } from "react";
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
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
const AddItemDetailsScreen = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "white", height: "100%", color: "black" }}>
        <Text style={{ color: "gray", marginLeft: 20, marginTop: 20 }}>
          ছবি আপলোড করুন(সর্বোচ্চ ৫টি ছবি)
        </Text>
        <Pressable
          style={styles.uploadImage}
          onPress={() => navigation.navigate("SelectPhotosScreen")}>
          <AntDesign name="pluscircle" size={24} color="#293241" />
        </Pressable>
        <View style={styles.category}>
          <Text style={{ color: "gray" }}>ক্যাটাগরী</Text>
          <AntDesign
            style={{ color: "gray" }}
            name="right"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.title}>
          <TextInput placeholder="টাইটেল" />
        </View>
        <View style={styles.description}>
          <TextInput placeholder="বর্ণনা" multiline={true} numberOfLines={3} />
        </View>
        <View style={styles.description}>
          <TextInput placeholder="দৈনিক ভাড়া মূল্য" keyboardType="numeric" />
        </View>
        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate("AddItemValue")}>
          <Text style={styles.nextText}>পরবর্তী</Text>
        </Pressable>
        {/* <View>
        <Pressable onPress={LoadLib}>
          <Text>Choose a photo</Text>
        </Pressable>
      </View> */}
        {/* <Pressable
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#c3c3c3",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("SelectPhotosScreen")}>
        <Text>Add Item details</Text>
      </Pressable> */}
      </View>
    </ScrollView>
  );
};

export default AddItemDetailsScreen;
