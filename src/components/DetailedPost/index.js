import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";
import { S3Image } from "aws-amplify-react-native";
const Post = (props) => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* image */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <Text>post.images</Text>
        <S3Image
          style={{ height: 200, width: 200 }}
          imgKey="fb3660d3-780d-45a3-bfed-4e4dbcf1916f.jpg"
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
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
