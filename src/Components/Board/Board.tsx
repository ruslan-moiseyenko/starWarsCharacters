import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonReset } from '@/Components/Buttons/ButtonReset';

type BoardProps = {
  menCount: number;
  womenCount: number;
  othersCount: number;
};

export const Board = ({ menCount, othersCount, womenCount }: BoardProps) => {
  return (
    <View style={styles.container}>
      <Text>Funs</Text>
      <View>
        <Text>Favorite Men: {menCount}</Text>
        <Text>Favorite Women: {womenCount}</Text>
        <Text>Favorite Others: {othersCount}</Text>
        <ButtonReset />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
