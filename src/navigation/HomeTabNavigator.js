import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import ListingRoute from "./ListingRoute";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AddItemDetailsScreen from "../screens/AddItemDetailsScreen";
import ListingItems from "../screens/ListingItems";
const Tab = createBottomTabNavigator();
const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#f15454",
      }}>
      <Tab.Screen
        name={"Explore"}
        // component={ExploreNavigator}
        // component={AddItemDetailsScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Listing"}
        component={ListingItems}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list-alt" size={25} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Item"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        // component={HomeScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={25} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;
