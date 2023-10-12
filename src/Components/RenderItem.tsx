import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TCharacter } from '../Store/types';
import { COLORS } from '../Theme/Colors';

type RenderItemProps = {
  item: TCharacter;
};

export const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.gender}</Text>
      <Text style={styles.text}>{item.birth_year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.BLACK,
  },
});
