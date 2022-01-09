import React from 'react';
import { View, Text } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const Post = ({ place }) => {
  const { image, bed, bedroom, title, oldPrice, newPrice, coordinate } = place;
  return (
    <View style={styles.mainContainer}>
      {/* Image Carousel */}
      <SliderBox
        images={[image]}
        dotColor={'white'}
        paginationBoxStyle={{
          borderRadius: 10,
        }}
        style={styles.imgs}
      ></SliderBox>
      {/* like button */}
      {/* <MaterialIcons name='favorite-border' size={24} color='black' /> */}
      <View style={styles.titleContainer}>
        <Text style={styles.bath}>
          {bedroom} bedrooms - {bed} baths
        </Text>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.discount}>${oldPrice}</Text>
          <Text style={styles.price}>${newPrice}</Text>
          <Text style={styles.perNight}>'/ night'</Text>
        </View>
        <Text style={styles.total}>{newPrice}</Text>
      </View>
    </View>
  );
};

export default Post;
