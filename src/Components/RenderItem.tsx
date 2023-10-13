import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { TCharacter } from '../Store/types';
import { COLORS } from '../Theme/Colors';

type RenderItemProps = {
  item: TCharacter;
};

export const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.infoWrapper}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.gender}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.BLACK,
  },
  infoWrapper: {},
});
