import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
const AddItemPhotoList = (props) => {
  const imageData = props.post;
  const navigation = useNavigation();
  //   const goToPostPage = () => {
  //     navigation.navigate("Post", { postId: post.id });
  //   };
  return (
    <View>
      {/* <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <Image source={item.uri} style={{ height: 100, width: 100 }} />
        )}
      /> */}
      <Image source={imageData[0].uri} style={{ height: 100, width: 100 }} />
    </View>
  );
};
export default AddItemPhotoList;
