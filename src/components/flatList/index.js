import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';

const FlatListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Entypo name='location-pin' size={24} color='black' />
      </View>
      <Text style={styles.description}>{item.item.description}</Text>
    </View>
  );
};

export default FlatListItem;
