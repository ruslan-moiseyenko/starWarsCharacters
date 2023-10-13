import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { PressableOpacity } from '../../Components/PressableOpacity/PressableOpacity';
import { Icons } from '../../Constants/icons';
import { COLORS } from '../../Theme/Colors';

type ButtonAddToFavoriteProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export const ButtonAddToFavorite = ({
  onPress,
  style,
}: ButtonAddToFavoriteProps) => {
  return (
    <PressableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icons.Heart style={styles.icon} color={COLORS.RED} />
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
