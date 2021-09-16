import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  Modal,
} from "react-native";
// import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, useRoute } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Auth } from "aws-amplify";
import DatepickerRange from "react-native-range-datepicker";
const ShowListDetailsScreen = (props) => {
  const logout = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  // [dateRange, setDateRange] = useState({});
  // "2021-09-23T18:00:00.000Z".split("T")[0]
  // useEffect(() => {
  //   console.log(dateRange);
  // }, [dateRange]);
  return (
    <View style={{ backgroundColor: "white", height: "100%", color: "black" }}>
      <Pressable
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#c3c3c3",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={logout}>
        <Text>ShowListDetailsScreen's post id: {route.params.postId}</Text>
      </Pressable>
      {/* <DatepickerRange
        placeHolderStart="শুরুর তারিখ"
        placeHolderUntil="শেষের তারিখ"
        ignoreMinDate="false"
        showClose="false"
        onConfirm={(startDate, untilDate) =>
          setDateRange({ startDate, untilDate })
        }
        todayColor="red"
        minDate="20210912"
        startDate="20210912"
      /> */}
    </View>
  );
};

export default ShowListDetailsScreen;
