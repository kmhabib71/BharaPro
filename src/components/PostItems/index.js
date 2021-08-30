import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    // navigation.navigate('Post', {postId: post.id});
    navigation.navigate("ShowListDetails", { postId: post.id });
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Text>Title: {post.title}</Text>
      {/* image */}
      <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: post.images,
        }}
      />
      {/* Bed & bedroom */}
      <Text>Description: {post.description}</Text>

      {/* Type & description*/}
      <Text numberOfLines={2}>Value: {post.value}</Text>
    </Pressable>
  );
};

export default Post;
