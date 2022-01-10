import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <View style={styles.icon}></View>
        <View style={styles.text}>
          <Text>Explore</Text>
        </View>
      </View>
      <View style={styles.tab}>
        <View style={styles.icon}></View>
        <View style={styles.text}>
          <Text>Saved</Text>
        </View>
      </View>
      <View style={styles.tab}>
        <View style={styles.icon}></View>
        <View style={styles.trips}>
          <Text>Trips</Text>
        </View>
      </View>
      <View style={styles.tab}>
        <View style={styles.icon}></View>
        <View style={styles.text}>
          <Text>Inbox</Text>
        </View>
      </View>
      <View style={styles.tab}>
        <View style={styles.icon}></View>
        <View style={styles.text}>
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default TabNavigator;
