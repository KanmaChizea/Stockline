import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {Onboarding} from '../Screens/Onboarding';
import {Login} from '../Screens/Login';
import {Register} from '../Screens/Registration';
import {EnterPhone} from '../Screens/Registration/EnterPhone';
import {VerifyCode} from '../Screens/Registration/VerifyCode';
import {Icons} from '../Theme/Icons';
import {PressableOpacity} from '../Components/Button/PressableOpacity';
import {RouteProp} from '@react-navigation/native';
import {RegistrationComplete} from '../Screens/Registration/RegistrationComplete';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions = ({
  navigation,
}: {
  route: RouteProp<AuthStackParamList, keyof AuthStackParamList>;
  navigation: any;
}) => ({
  headerShown: true,
  headerTitle: '',
  headerShadowVisible: false,
  headerLeft: () => {
    return (
      <PressableOpacity onPress={() => navigation.goBack()}>
        <Icons.Back />
      </PressableOpacity>
    );
  },
});
export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="RegistrationComplete"
        component={RegistrationComplete}
      />
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen name="EnterPhone" component={EnterPhone} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
