import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import styles from "./style";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { getListing } from "../../../src/graphql/queries";
import { listListings } from "../../../src/graphql/queries";
import PostItems from "../../components/PostItems";
import config from "../../aws-exports";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const HomeScreen = (props) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState([]);
  const [newListItem, setNewListItem] = useState([]);
  const [showImage, setShowImage] = useState("");
  async function getImgg() {
    const imageKey = await Storage.get(
      "fb3660d3-780d-45a3-bfed-4e4dbcf1916f.jpg",
      {
        level: "private",
      }
    );
    setShowImage(imageKey);
    // console.log(imageKey);
  }
  // console.log(getImgg());
  useEffect(() => {
    getImgg();
    const fetchUsers = async () => {
      try {
        const itemListByCat = await API.graphql(
          graphqlOperation(listListings, {
            category: "Office Equipment",
          })
        );
        console.log(itemListByCat.data.listListings.items);
        setNewListItem(itemListByCat.data.listListings.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const itemList = await API.graphql(
          graphqlOperation(getListing, {
            id: "01",
          })
        );
        // console.log(itemList.data.getListing.description);
        setNewItem(itemList.data.getListing);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);
  return (
    <View style={{ backgroundColor: "white", height: "100%", color: "black" }}>
      {/* <Text>{showImage}</Text> */}

      {/* <Image
        source={{
          uri: "https://bharaprobracket173833-dev.s3.ap-northeast-2.amazonaws.com/public/10f43888-2506-4777-a1a6-99f6701f1189.jpg",
        }}
        style={{ height: 200, width: 200 }}></Image> */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <View
        style={{
          backgroundColor: "#fec85c",
          height: 200,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        {/* <View
          style={{
            color: 'black',
            position: 'absolute',
            top: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 3, marginHorizontal: 10, marginTop: 35}}>
            <Image
              style={{width: 220, height: 35}}
              source={require('./../../../assets/images/logo-left.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: 50,
              width: 90,
              backgroundColor: '#293241',
              marginRight: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              marginTop: 30,
            }}>
            <Icon name="plus" size={30} color="#ff6678" />
          </View>
        </View>
        <View style={styles.displayCenter}>
          <View
            style={{
              top: 120,
              height: 140,
              width: '80%',
              backgroundColor: '#293241',
              borderRadius: 25,
              paddingTop: 30,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'white',
                marginHorizontal: 30,
                height: 40,
                paddingHorizontal: 10,
                borderRadius: 8,
              }}>
              <TextInput
                style={{color: 'black', width: 220}}
                placeholder="ভাড়ার জন্য সার্স করুন"
                placeholderTextColor="grey"
              />
              <Icon
                style={{
                  padding: 10,
                  borderRadius: 50,
                }}
                name="search"
                size={20}
                color="darkgrey"
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 143,
            }}>
            <View style={{marginRight: 10}}>
              <Pressable
                style={{
                  top: 60,
                  backgroundColor: 'white',
                  paddingVertical: 4,
                  paddingHorizontal: 20,
                  borderRadius: 7,
                }}
                onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  }}>
                  অবস্থান
                </Text>
              </Pressable>
            </View>
            <View style={{marginRight: 10}}>
              <Pressable
                style={{
                  top: 60,
                  backgroundColor: 'white',
                  paddingVertical: 4,
                  paddingHorizontal: 20,
                  borderRadius: 7,
                }}
                onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  }}>
                  ক্যাটাগরি
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                style={{
                  top: 60,
                  backgroundColor: 'white',
                  paddingVertical: 4,
                  paddingHorizontal: 17,
                  borderRadius: 7,
                }}
                onPress={() => setModalVisible(true)}>
                <View
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  }}>
                  <Octicons name="settings" size={22} color="black" />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      */}
        <Text>Its home page</Text>
      </View>
      {/* <View>
        <View>
          <Text>{newItem.title}</Text>
          <Text>{newItem.description}</Text>
          <Image
            style={{ height: 200, width: 200 }}
            source={{
              uri: newItem.images,
            }}
          />
          <Text>{newItem.value}</Text>
        </View>
      </View> */}
      <FlatList
        data={newListItem}
        renderItem={({ item }) => <PostItems post={item} />}
      />
    </View>
  );
};

export default HomeScreen;
