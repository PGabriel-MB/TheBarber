import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './src/stacks/MainStack';
import { UserProvider } from "./src/contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <MainStack />
      </NavigationContainer>
    </UserProvider>
  );
}
