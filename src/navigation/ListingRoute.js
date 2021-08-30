import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import DestinationSearchResultScreen from "../screens/DestinationSearch";
// import GuestsScreen from "../screens/Guests";
import ListingItems from "../screens/ListingItems";
import AddItemDetailsScreen from "../screens/AddItemDetailsScreen";
import AddItemValueScreen from "../screens/AddItemValue";
import SelectPhotosScreen from "../screens/SelectPhoto";

// import postScreen from "../screens/postScreen";
const Stack = createStackNavigator();
const ListingRoute = (props) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={"AddItem"}
        component={ListingItems}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={"AddItemDetails"}
        component={AddItemDetailsScreen}
        options={{
          title: "Add Item Details",
        }}
      />
      <Stack.Screen
        name={"SelectPhotosScreen"}
        component={SelectPhotosScreen}
        options={{
          title: "Add photo",
        }}
      />

      <Stack.Screen
        name={"AddItemValue"}
        component={AddItemValueScreen}
        options={{
          title: "Add Item Value",
        }}
      />
      {/*  <Stack.Screen
          name={'Post'}
          component={postScreen}
          options={{
            title: 'Accomodation',
          }}
        /> */}
    </Stack.Navigator>
  );
};
export default ListingRoute;
