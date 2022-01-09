import React, { useState } from 'react';
import { View, TextInput, Dimensions, Text, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import FlatListItem from '../../components/flatList/index';
import { styles } from './styles';

import { searchResults } from '../../../assets/airbnb/search';

const LocationSearch = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* input component */}
      <TextInput
        style={styles.input}
        placeholder='Search for locations'
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FlatListItem item={item} />}
      />
      {/* List of destinations */}
    </View>
  );
};

export default LocationSearch;
