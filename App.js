import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import HomeScreen from './src/screens/home/index';
import Post from './src/components/post.js/index';
import LocationSearch from './src/screens/locationSearch/index';
import GuestsScreen from './src/screens/guests/index';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <HomeScreen />
          {places.map((place, index) => {
            return <Post key={index} place={place} />;
          })}
          <LocationSearch />
          <GuestsScreen />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
