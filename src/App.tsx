import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import RootStackNavigator from './Navigation/RootStackNavigator';
import { store } from './Store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
