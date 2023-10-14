import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Icons } from '@/Constants/icons';

export const ButtonBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
      <Icons.ArrowLeft />
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
