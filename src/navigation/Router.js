import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import DestinationSearchResultScreen from "../screens/DestinationSearch";
// import GuestsScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";
import ShowListDetailsScreen from "../../src/screens/ShowListDetails";
import ListingRoute from "./ListingRoute";
import AddCategoryInItem from "../screens/AddCategoryInItem";
// import postScreen from "../screens/postScreen";
const Stack = createStackNavigator();
const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          // component={AddCategoryInItem}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchResultScreen}
          options={{
            title: 'Search your destination?',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />*/}
        <Stack.Screen
          name={"ShowListDetails"}
          component={ShowListDetailsScreen}
          options={{
            title: "Accomodation",
          }}
        />
        <Stack.Screen
          name={"ListingRoute"}
          component={ListingRoute}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
