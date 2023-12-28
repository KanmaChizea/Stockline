import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {View} from 'react-native';
import {Onboarding} from '../Screens/Onboarding';
import {Login} from '../Screens/Login';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={View} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
