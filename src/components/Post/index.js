import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const Post = props => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedrooms
      </Text>

      {/* Type & description*/}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      {/* Old price & new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice}</Text>/night
      </Text>
      {/* Total price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} totall</Text>
    </Pressable>
  );
};

export default Post;
