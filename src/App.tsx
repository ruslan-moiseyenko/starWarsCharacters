import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
