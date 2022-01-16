import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FlatListItem = ({ item }) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {
      navigation.navigate('Guests')
     }}>
    <View style={styles.container}>
      
      <View style={styles.icon}>
        <Entypo name='location-pin' size={24} color='black' />
      </View>
      <Text style={styles.description}>{item.item.description}</Text>
    </View>
    </Pressable>

  );
};

export default FlatListItem;
