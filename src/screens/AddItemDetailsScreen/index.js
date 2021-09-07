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
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import AddItemPhotoList from "../../components/AddItemPhotoList";
import ImageZoom from "react-native-image-pan-zoom";
import { v4 as uuidv4 } from "uuid";
import { createListing } from "../../graphql/mutations";
const AddItemDetailsScreen = (props) => {
  // const logout = () => {
  //   Auth.signOut();
  // };
  const navigation = useNavigation();
  const route = useRoute();
  const [getItemImage, setGetItemImage] = useState([]);
  const [imageUriToStore, setImageUriToStore] = useState([]);
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
  [imageCount, setImageCount] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rentValue, setRentValue] = useState("");
  // var imageSrcArray = [];
  // setImageCount([]);
  // console.log(getItemImage.imageData.length);
  const imageToStore = async () => {
    try {
      getItemImage &&
        getItemImage.imageData &&
        getItemImage.imageData.map(async (component, index) => {
          // console.log(component.uri);
          // setImageCount(imageCount + 1);
          const imageUrl = component.uri;
          const response = await fetch(imageUrl);

          const blob = await response.blob();

          const urlParts = imageUrl.split(".");
          const extension = urlParts[urlParts.length - 1];

          const key = `${uuidv4()}.${extension}`;

          await Storage.put(key, blob);
          // console.log(getItemImage.imageData.length);
          // console.log(getItemImage.imageData.length);
          setImageCount([...imageCount, { imageUri: key }]);
          if (getItemImage.imageData.length == index + 1) {
            // console.log(JSON.stringify(imageCount));
            const itemToPost = {
              title: title,
              category: getCategory.catItemName,
              description: description,
              images: imageCount,
              value: rentValue,
            };
            await API.graphql(
              graphqlOperation(createListing, { input: itemToPost })
            );
            console.log(itemToPost);
            // console.log("imageCount array: " + imageCount[1].imageUri);
            // console.log("imageCount array: " + imageSrcArray[0].imageUri);
          } else {
            // imageSrcArray.push({ imageId: index, imageUri: component.uri });
          }
          //Ekhane graphql storing function run korte hobe, shorto holo jokon loop shesh hobe tokhoni graphql operation chalate hobe jate array varaible thake image name gulo pawa jai.
          return key;
        });
    } catch (e) {
      console.log(e);
    }
    return "";
  };
  async function one() {
    console.log("fn one");
  }
  async function two() {
    console.log("fn two");
  }
  async function three() {
    console.log("fn three");
  }

  async function callALl() {
    // await imageToStore();
    await one();
    await two();
    await three();
  }
  // console.log(imageToStore());
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
          </View>
        </View>
      </Modal>
      <View
        style={{ backgroundColor: "white", height: "100%", color: "black" }}>
        <Text style={{ color: "gray", marginLeft: 20, marginTop: 20 }}>
          ছবি আপলোড করুন(সর্বোচ্চ ৫টি ছবি)
        </Text>

        <View>
          <ScrollView horizontal={true} style={styles.container}>
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
          </ScrollView>
        </View>
        <Pressable
          style={styles.uploadImage}
          android_ripple={{ color: "grey" }}
          onPress={() => {
            callALl();
            navigation.navigate("SelectPhotosScreen");
          }}>
          <AntDesign name="pluscircle" size={24} color="#293241" />
        </Pressable>
        <Pressable
          style={styles.category}
          android_ripple={{ color: "grey" }}
          onPress={() => navigation.navigate("AddCategoryInItem")}>
          <Text style={{ color: "gray" }}>{getCategory.catItemName}</Text>
          <AntDesign
            style={{ color: "gray" }}
            name="right"
            size={20}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.title}>
          <TextInput
            placeholder="টাইটেল"
            onChangeText={(text) => setTitle(text)}
          />
        </Pressable>
        <View style={styles.description}>
          <TextInput
            placeholder="বর্ণনা"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            placeholder="দৈনিক ভাড়া মূল্য"
            keyboardType="numeric"
            onChangeText={(text) => setRentValue(text)}
          />
        </View>
        <Pressable
          style={styles.nextButton}
          onPress={() => imageToStore()}
          android_ripple={{ color: "grey" }}>
          <Text style={styles.nextText}>পরবর্তী</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddItemDetailsScreen;
