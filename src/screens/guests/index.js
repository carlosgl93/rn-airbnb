import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

const ageGroups = ['Adults', 'Children', 'Infants'];
const agesExplained = ['Ages 13 or above', 'Ages 2-12', 'Under 2'];

const RowComponent = ({ ageGroup, ageExplained }) => {
  const [amount, setAmount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <Text style={styles.ageGroup}>{ageGroup}</Text>
        <Text style={styles.ageExplained}>{ageExplained}</Text>
      </View>
      <View style={styles.rightBox}>
        <Pressable onPress={() => setAmount(amount - 1)}>
          <AntDesign
            style={styles.icons}
            name='minuscircleo'
            size={24}
            color='black'
          />
        </Pressable>

        <Text>{amount}</Text>
        <Pressable onPress={() => setAmount(amount + 1)}>
          <AntDesign
            style={styles.icons}
            name='pluscircleo'
            size={24}
            color='black'
          />
        </Pressable>
      </View>
    </View>
  );
};

const GuestsScreen = () => {
  return (
    <View>
      <RowComponent ageGroup={ageGroups[0]} ageExplained={agesExplained[0]} />
      <RowComponent ageGroup={ageGroups[1]} ageExplained={agesExplained[1]} />
      <RowComponent ageGroup={ageGroups[2]} ageExplained={agesExplained[2]} />
    </View>
  );
};

export default GuestsScreen;
