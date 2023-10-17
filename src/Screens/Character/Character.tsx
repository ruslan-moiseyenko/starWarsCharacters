import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonBack } from '@/Components/Buttons/ButtonBack';
import { CharacterProps } from '@/Screens/Character/types';
import { useGetPlanetQuery } from '@/Services/api';
import { COLORS } from '@/Theme/Colors';

export const Character = ({ route }: CharacterProps) => {
  const { item: character } = route.params;

  const { data: planet, isLoading } = useGetPlanetQuery(character.homeworld);

  return (
    <View style={styles.container}>
      <View style={styles.navigationWrapper}>
        <ButtonBack />
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Name: </Text>
          <Text style={[styles.text, styles.boldText]}>{character.name}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Gender: </Text>
          <Text style={[styles.text, styles.boldText]}>{character.gender}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Bird year: </Text>
          <Text style={[styles.text, styles.boldText]}>
            {character.birth_year}
          </Text>
        </View>

        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Home world: </Text>
          <Text style={[styles.text, styles.boldText]}>
            {isLoading ? <Text>Loading...</Text> : <Text>{planet?.name}</Text>}
          </Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Height: </Text>
          <Text style={[styles.text, styles.boldText]}>{character.height}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.text}>Mass: </Text>
          <Text style={[styles.text, styles.boldText]}>{character.mass}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  navigationWrapper: {
    paddingVertical: 10,
    borderBottomColor: COLORS.BROWN,
    borderBottomWidth: 1,
  },
  infoWrapper: {
    padding: 10,
  },
  text: {
    color: COLORS.BLACK,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: '600',
  },
});
