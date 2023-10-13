import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ButtonAddToFavorite } from '../Components/Buttons/ButtonAddToFavorite';
import { useAppDispatch } from '../Hooks/redux';
import { toggleUniqueFavoriteCharacter } from '../Store/Common/commonSlice';
import { TCharacter } from '../Store/types';
import { COLORS } from '../Theme/Colors';

type RenderItemProps = {
  item: TCharacter;
};

export const RenderItem = ({ item }: RenderItemProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

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
    backgroundColor: COLORS.BLUE,
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
    // position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
