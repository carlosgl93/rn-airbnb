import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const HomeScreen = () => {
  const background = {
    uri: 'https://cdn.vox-cdn.com/thumbor/rQdP_2gdCKFQU7nPcKK8cuX2BDI=/0x0:1898x1273/1200x800/filters:focal(833x627:1135x929)/cdn.vox-cdn.com/uploads/chorus_image/image/64128012/airbnb_luxe_announcement.0.jpg',
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search Btn clicked')}
      >
        <AntDesign
          name='search1'
          size={24}
          color='black'
          style={styles.searchIcon}
        />
        <Text style={styles.searchButtonText}>Explore Nearby Places</Text>
      </Pressable>

      <ImageBackground source={background} style={styles.image}>
        <Text style={styles.title}>Go Near!</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}
        >
          <Text style={styles.buttonText}>Explore Nearby Places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
