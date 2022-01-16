import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabNavigator from '../navigation/homeTabNavigator/index';
import LocationSearch from '../screens/locationSearch/index';
import GuestsScreen from '../screens/guests';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={LocationSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name={'Guests'}
        component={GuestsScreen}
        options={{ title: 'Who is staying?' }}
      />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default Router;
