import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Barber from "../pages/Barber";
import PersonalData from "../pages/PersonalData";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Preload from "../pages/Preload";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

export const MainStack: React.FC = () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#CB1A1A' }
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Barber" component={Barber} />
        <Stack.Screen name="PersonalData" component={PersonalData} />
    </Stack.Navigator>
);