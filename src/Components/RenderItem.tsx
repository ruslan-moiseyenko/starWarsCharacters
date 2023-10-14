import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getAllFavorites } from '@/Store/Common/selectors';

import { ButtonAddToFavorite } from '../Components/Buttons/ButtonAddToFavorite';
import { isObjectUniqueInArray } from '../Helpers/helpers';
import { useAppDispatch, useAppSelector } from '../Hooks/redux';
import { toggleUniqueFavoriteCharacter } from '../Store/Common/commonSlice';
import { TCharacter } from '../Store/types';
import { COLORS } from '../Theme/Colors';

type RenderItemProps = {
  item: TCharacter;
};

export const RenderItem = ({ item }: RenderItemProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const favoriteCharacters = useAppSelector(getAllFavorites);

  const handleAddFavoriteClick = () => {
    dispatch(toggleUniqueFavoriteCharacter({ people: [item] }));
  };

  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate('Character', { item })}
    >
      <View style={styles.container}>
        <View style={styles.infoWrapper}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <ButtonAddToFavorite
          onPress={handleAddFavoriteClick}
          style={styles.button}
          color={
            isObjectUniqueInArray(favoriteCharacters || [], item)
              ? COLORS.WHITE
              : COLORS.RED
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.BLACK,
  },
  infoWrapper: {
    width: '100%',
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
