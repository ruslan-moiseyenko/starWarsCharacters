import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { Icons } from '@/Constants/icons';
import { useAppDispatch } from '@/Hooks/redux';
import { resetFavoriteCharacters } from '@/Store/Common/commonSlice';

type ButtonResetProps = {
  style?: ViewStyle;
};

export const ButtonReset = ({ style }: ButtonResetProps) => {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => dispatch(resetFavoriteCharacters())}
    >
      <Icons.Trash />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 20,
  },
});
