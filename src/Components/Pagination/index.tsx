import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PressableOpacity } from '@/Components/PressableOpacity/PressableOpacity';
import { COLORS } from '@/Theme/Colors';

type PaginationProps = {
  isForwardDisabled: boolean;
  isBackDisabled: boolean;
  onForwardPress: () => void;
  onBackPress: () => void;
  currentPage: number;
  pages: number;
};

export const Pagination = ({
  isBackDisabled,
  isForwardDisabled,
  currentPage,
  pages,
  onBackPress,
  onForwardPress,
}: PaginationProps) => {
  return (
    <View style={styles.container}>
      <PressableOpacity
        onPress={onBackPress}
        disabled={isBackDisabled}
        style={[styles.button, isBackDisabled && styles.disabled]}
      >
        <Text>Back</Text>
      </PressableOpacity>
      <Text>
        Page {currentPage} of {pages}
      </Text>
      <PressableOpacity
        onPress={onForwardPress}
        disabled={isForwardDisabled}
        style={[styles.button, isForwardDisabled && styles.disabled]}
      >
        <Text>Forward</Text>
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 4,
    backgroundColor: COLORS.ACCENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: COLORS.ACCENT + '55',
  },
});
