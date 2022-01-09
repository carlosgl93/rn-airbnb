import React from 'react';
import { View, FlatList } from 'react-native';

import feed from '../../../assets/airbnb/feed';
import Post from '../../components/post.js/index';

const SearchResults = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post key={item.id} place={item} />}
      />
    </View>
  );
};

export default SearchResults;
