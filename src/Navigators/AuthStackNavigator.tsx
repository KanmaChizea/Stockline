import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={View} />
      <Stack.Screen name="Register" component={View} />
      <Stack.Screen name="Login" component={View} />
    </Stack.Navigator>
  );
};
