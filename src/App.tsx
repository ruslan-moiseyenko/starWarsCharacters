import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import RootStackNavigator from '@/Navigation/RootStackNavigator';
import { store } from '@/Store/store';
import { COLORS } from '@/Theme/Colors';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <RootStackNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
