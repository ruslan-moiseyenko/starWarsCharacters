import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonReset } from '@/Components/Buttons/ButtonReset';
import { COLORS } from '@/Theme/Colors';

type BoardProps = {
  menCount: number;
  womenCount: number;
  othersCount: number;
};

export const Board = ({ menCount, othersCount, womenCount }: BoardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Star Wars Characters by gender</Text>
      <View style={styles.infoWrapper}>
        <View style={styles.section}>
          <Text>Men: </Text>
          <Text>{menCount}</Text>
        </View>
        <View style={styles.section}>
          <Text>Women:</Text>
          <Text>{womenCount}</Text>
        </View>
        <View style={styles.section}>
          <Text>Others: </Text>
          <Text>{othersCount}</Text>
        </View>
        <View style={styles.section}>
          <ButtonReset />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  infoWrapper: {
    flexDirection: 'row',
    columnGap: 2,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderColor: COLORS.BROWN,
    borderWidth: 1,
  },
});
