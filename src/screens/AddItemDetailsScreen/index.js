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
  FlatList,
} from "react-native";
import styles from "./style";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, useRoute } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import AddItemPhotoList from "../../components/AddItemPhotoList";
const AddItemDetailsScreen = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  // const post = places.find(place => place.id === route.params.postId);
  const [getItemImage, setGetItemImage] = useState([]);
  const [getCategory, setGetCategory] = useState({
    catItemName: "ক্যাটাগরি",
    catItemid: 0,
  });

  useEffect(() => {
    if (!route.params) {
      // alert("No data");
    } else if (route.params.catItemName !== undefined) {
      alert("catname found");
      setGetCategory(route.params);
      // console.log(getCategory);
    } else if (route.params.imageData !== undefined) {
      setGetItemImage(route.params);
      alert("image data found");
    } else {
      alert("nothing found, try again");
    }
  });

  // if (!route.params) {
  //   // alert("No data");
  // } else {
  //   if (route.params.catItemName != "") {
  //     const { catItemName } = route.params;
  //     const { catItemid } = route.params;
  //   }
  // }
  // if (!route.params) {
  //   // alert("No data");
  // } else if (route.params.imageData != "") {
  //   var { imageData } = route.params;

  //   console.log(imageData[0].uri);
  // }
  // useEffect(() => {
  //   setGetCategoryName(imageData);
  // }, []);
  // const { catItemName } = route.params;
  // setGetCategory(route.params);
  // if (!route.params) {
  //   setGetCategory(route.params.catItemName);
  // }
  // if (typeof route.params !== "undefined") {
  // setGetCategoryName(route.params.catItemName);
  //   alert("got it");
  // }
  // console.log(route.params.catItemName);
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "white", height: "100%", color: "black" }}>
        <Text style={{ color: "gray", marginLeft: 20, marginTop: 20 }}>
          ছবি আপলোড করুন(সর্বোচ্চ ৫টি ছবি)
        </Text>
        {/* <Text>{getCategoryName[0].uri}</Text> */}
        <View>
          <Image
            source={{
              uri:
                "" + getItemImage.length == 0
                  ? ""
                  : getItemImage.imageData[0].uri + "",
            }}
            style={{ height: 100, width: 100 }}
          />
          <View style={styles.container}>
            {/* {imageData.map((item, index) => (
              <Pressable
                key={item[index].id}
                style={styles.container}
                android_ripple={{ color: "grey" }}>
                <Image
                  source={item[index].uri}
                  style={{ height: 100, width: 100 }}
                />
              </Pressable>
            ))} */}
            {/* <AddItemPhotoList
              post={
                !route.params
                  ? ""
                  : route.params.imageData != ""
                  ? imageData[0].uri
                  : ""
              }
            /> */}
          </View>
        </View>
        <Pressable
          style={styles.uploadImage}
          android_ripple={{ color: "grey" }}
          onPress={() => navigation.navigate("SelectPhotosScreen")}>
          <AntDesign name="pluscircle" size={24} color="#293241" />
        </Pressable>
        <Pressable
          style={styles.category}
          android_ripple={{ color: "grey" }}
          onPress={() => navigation.navigate("AddCategoryInItem")}>
          <Text style={{ color: "gray" }}>
            {/* {getCategory !== undefined ? getCategory.catItemName : "category"} */}
            {getCategory.catItemName}
          </Text>
          <AntDesign
            style={{ color: "gray" }}
            name="right"
            size={20}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.title}>
          <TextInput placeholder="টাইটেল" />
        </Pressable>
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
