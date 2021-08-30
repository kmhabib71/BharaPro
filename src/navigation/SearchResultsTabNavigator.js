import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResults from '../screens/searchResults';
import SearchResultMaps from '../screens/SearchResultsMap';
const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResults}></Tab.Screen>
      <Tab.Screen name={'map'} component={SearchResultMaps}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default SearchResultsTabNavigator;
