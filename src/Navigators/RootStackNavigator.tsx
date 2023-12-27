import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {COLORS} from '../Theme/Colors';
import {RootStackParamList} from './types';
import {navigationRef} from './Root';
import {AuthStackNavigator} from './AuthStackNavigator';
import {AppStackNavigator} from './AppStackNavigator';
import {SplashScreen} from '../Screens/Splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.TRANSPARENT}
        translucent
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
          <Stack.Screen name="App" component={AppStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
