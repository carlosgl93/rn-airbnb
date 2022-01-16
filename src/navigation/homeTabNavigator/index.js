import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import ExploreNavigator from './exploreNavigator'
import HomeScreen from '../../screens/home';
import SavedScreen from '../../screens/saved';
import Trips from '../../screens/trips';
import InboxScreen from '../../screens/inbox';
import ProfileScreen from '../../screens/profile';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = 'search';
          } else if (route.name === 'Saved') {
            iconName = 'heart';
          } else if (route.name === 'Trips') {
            iconName = 'airbnb';
          } else if (route.name === 'Inbox') {
            iconName = 'comment';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#f15454',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='Explore' component={ExploreNavigator} />
      <Tab.Screen name='Saved' component={SavedScreen} />
      <Tab.Screen name='Trips' component={Trips} />
      <Tab.Screen name='Inbox' component={InboxScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
