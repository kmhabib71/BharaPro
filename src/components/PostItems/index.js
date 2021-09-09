import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import { S3Image } from "aws-amplify-react-native";
const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    // navigation.navigate('Post', {postId: post.id});
    navigation.navigate("ShowListDetails", { postId: post.id });
  };
  [imageList, setImageList] = useState(JSON.parse(post.images));

  // useEffect(() => {
  //   imageList.map((comp, index) => console.log(comp.imageUri));
  // }, []);
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Text>Title: {post.title}</Text>
      {/* image */}
      {/* <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "https://bharaprobracket173833-dev.s3.ap-northeast-2.amazonaws.com/public/fb3660d3-780d-45a3-bfed-4e4dbcf1916f.jpg",
        }}
      /> */}

      {/* {post.images.map((img, index) => ( */}
      {/* <S3Image style={styles.image} imgKey={post.images} /> */}

      {/* {imageList.map((component, index) => ( */}
      <S3Image
        style={{ height: 200, width: 200 }}
        imgKey={imageList[0].imageUri}
      />
      {/* // <Text>images: {component[index]}</Text>
      // ))} */}

      {/* <S3Image
        style={{ height: 200, width: 200 }}
        imgKey={post.images.imageUri}
      /> */}
      {/* <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "https://bharaprobracket173833-dev.s3.ap-northeast-2.amazonaws.com/public/fb3660d3-780d-45a3-bfed-4e4dbcf1916f.jpg",
        }}
      /> */}
      {/* // ))} */}
      {/* Bed & bedroom */}
      <Text>Description: {post.description}</Text>
      {/* Type & description*/}
      <Text numberOfLines={2}>Value: {post.value}</Text>
    </Pressable>
  );
};

export default Post;
