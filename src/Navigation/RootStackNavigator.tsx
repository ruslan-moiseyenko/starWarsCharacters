import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Character } from '../Screens/Character';
import { Main } from '../Screens/Main';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="App" component={Main} />
          <Stack.Screen name="Character" component={Character} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNavigator;
