import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../../screens/home';
import SavedScreen from '../../screens/saved';
import Trips from '../../screens/trips';
import InboxScreen from '../../screens/inbox';
import ProfileScreen from '../../screens/profile';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f15454',
      }}
    >
      <Tab.Screen
        name='Explore'
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <AntDesign name='search1' size={24} color='blue' />;
          },
        }}
      />
      <Tab.Screen
        name='Saved'
        component={SavedScreen}
        options={{
          tabBarIcon: () => {
            <AntDesign name='hearto' size={24} color='black' />;
          },
        }}
      />
      <Tab.Screen
        name='Trips'
        component={Trips}
        options={{
          tabBarIcon: () => {
            <FontAwesome5 name='airbnb' size={24} color='black' />;
          },
        }}
      />
      <Tab.Screen
        name='Inbox'
        component={InboxScreen}
        options={{
          tabBarIcon: () => {
            <MaterialCommunityIcons
              name='message-outline'
              size={24}
              color='black'
            />;
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            <Ionicons
              name='md-person-circle-outline'
              size={24}
              color='black'
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
