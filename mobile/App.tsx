import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './src/stacks/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainStack />
    </NavigationContainer>
  );
}
