import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ButtonAddToFavorite } from '@/Components/Buttons/ButtonAddToFavorite';
import { isObjectUniqueInArray } from '@/Helpers/helpers';
import { useAppDispatch, useAppSelector } from '@/Hooks/redux';
import { toggleUniqueFavoriteCharacter } from '@/Store/Common/commonSlice';
import { getAllFavorites } from '@/Store/Common/selectors';
import { TCharacter } from '@/Store/types';
import { COLORS } from '@/Theme/Colors';

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
          <View style={styles.itemWrapper}>
            <Text style={styles.text}>Name: </Text>
            <Text style={[styles.text, styles.boldText]}>{item.name}</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={styles.text}>Gender: </Text>
            <Text style={[styles.text, styles.boldText]}>{item.gender}</Text>
          </View>
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
    borderBottomColor: COLORS.BROWN,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.BLACK,
  },
  infoWrapper: {
    width: '100%',
    backgroundColor: COLORS.BACKGROUND,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: '600',
  },
  button: {
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
