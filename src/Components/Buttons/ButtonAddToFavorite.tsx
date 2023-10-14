import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { PressableOpacity } from '@/Components/PressableOpacity/PressableOpacity';
import { Icons } from '@/Constants/icons';

type ButtonAddToFavoriteProps = {
  onPress: () => void;
  style?: ViewStyle;
  color: string;
};

export const ButtonAddToFavorite = ({
  onPress,
  style,
  color,
}: ButtonAddToFavoriteProps) => {
  return (
    <PressableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icons.Heart style={styles.icon} color={color} />
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
