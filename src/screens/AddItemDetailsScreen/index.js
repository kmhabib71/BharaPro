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
  Dimensions,
} from "react-native";
import styles from "./style";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, useRoute } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import AddItemPhotoList from "../../components/AddItemPhotoList";
import ImageZoom from "react-native-image-pan-zoom";
const AddItemDetailsScreen = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

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
      // alert("catname found");
      setGetCategory(route.params);
      // console.log(getCategory);
    } else if (route.params.imageData !== undefined) {
      setGetItemImage(route.params);
      // console.log(getItemImage.imageData[0].uri);
      // alert("image data found");
    } else {
      // alert("nothing found, try again");
    }
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  var width = Dimensions.get("window").width; //full width
  var height = Dimensions.get("window").height; //full height
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              android_ripple={{ color: "grey" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "#293241",
                  borderRadius: 50,
                  paddingVertical: 5,
                  paddingHorizontal: 13,
                  marginTop: 20,
                }}>
                X
              </Text>
            </Pressable>
            <ImageZoom
              cropWidth={Dimensions.get("window").width}
              cropHeight={Dimensions.get("window").height}
              imageWidth={width}
              imageHeight={height}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "" + imageSrc + "",
                }}
              />
            </ImageZoom>
            {/* <ImageViewer imageUrls={imageSrc} /> */}
            {/* <ScrollView
              style={styles.textStyle}
              minimumZoomScale={1}
              maximumZoomScale={5}
              horizontal={true}>
              <Image
                source={{
                  uri: "" + imageSrc + "",
                }}
                style={{
                  width: width,
                  height: height,
                  flex: 1,
                  resizeMode: "contain",
                }}
              />
            </ScrollView> */}
          </View>
        </View>
      </Modal>
      <View
        style={{ backgroundColor: "white", height: "100%", color: "black" }}>
        <Text style={{ color: "gray", marginLeft: 20, marginTop: 20 }}>
          ছবি আপলোড করুন(সর্বোচ্চ ৫টি ছবি)
        </Text>
        {/* <Text>{getCategoryName[0].uri}</Text> */}
        <View>
          <ScrollView horizontal={true} style={styles.container}>
            {/* {showImage()} */}

            {getItemImage &&
              getItemImage.imageData &&
              getItemImage.imageData.map((component, index) => (
                <Pressable
                  key={component.id}
                  android_ripple={{ color: "grey" }}
                  onPress={() => {
                    setImageSrc(component.uri);
                    setModalVisible(true);
                  }}>
                  <Image
                    android_ripple={{ color: "grey" }}
                    key={component.id}
                    source={{
                      uri: "" + component.uri + "",
                    }}
                    style={{ height: 100, width: 100, margin: 5 }}
                  />
                </Pressable>
              ))}

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
          </ScrollView>
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
          // onPress={() => navigation.navigate("AddItemValue")}
          onPress={() => alert("Pressed")}
          android_ripple={{ color: "grey" }}>
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
