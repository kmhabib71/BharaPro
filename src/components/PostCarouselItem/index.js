import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './style';
const Post = props => {
  const post = props.post;
  const widthh = useWindowDimensions().width;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <Pressable
      onPress={goToPostPage}
      style={[
        styles.container,
        {
          width: widthh - 60,
        },
      ]}>
      <View style={styles.innerContainer}>
        {/* image */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
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
            {/* <Text style={styles.oldPrice}>${post.oldPrice} </Text> */}
            <Text style={(styles.price, {color: 'black', fontWeight: 'bold'})}>
              {' '}
              ${post.newPrice}
            </Text>
            /night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
