import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../Screens/Main';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Screen name="App" component={Main} />
      </NavigationContainer>
    </>
  );
};

export default RootStackNavigator;
