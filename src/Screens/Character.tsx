import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { useGetPlanetQuery } from '@/Services/api';

import { ButtonBack } from '../Components/Buttons/ButtonBack';
import { TCharacter } from '../Store/types';

export const Character = () => {
  const route = useRoute();
  //@ts-ignore
  const character: TCharacter = route?.params?.item;

  const { data: planet, isLoading } = useGetPlanetQuery(character.homeworld);

  return (
    <View>
      <ButtonBack />
      <Text>{character.name}</Text>
      <Text>{character.gender}</Text>
      {isLoading ? <Text>Loading...</Text> : <Text>{planet?.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});
