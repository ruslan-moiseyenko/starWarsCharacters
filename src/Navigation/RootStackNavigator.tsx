import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Character } from '@/Screens/Character/Character';
import { Home } from '@/Screens/Home/Home';
import { TCharacter } from '@/Store/types';

const Stack = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
  Home: undefined;
  Character: { item: TCharacter };
};

const RootStackNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Character" component={Character} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNavigator;
