import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../Navigators/types';
import {useState} from 'react';
import {Alert} from 'react-native';

export const useVerifyCodeViewModel = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    'VerifyCode',
    undefined
  >,
) => {
  const [pin, setPin] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);

  const onPinChange = (value: string) => {
    setPin(value);
  };

  const verify = () => {
    if (pin.length === 4) {
      navigation.reset({
        index: 1,
        routes: [{name: 'Login'}, {name: 'RegistrationComplete'}],
      });
    } else {
      Alert.alert(
        'Error',
        'Please enter valid verification code',
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
    }
  };

  const handleKeyPress = (value: string) => {
    if (value === '*') {
      return;
    }
    if (value === 'delete') {
      const newValue = pin.slice(0, -1);
      setFocusedIndex(newValue.length);
      onPinChange(newValue);
    } else {
      const newValue = `${pin}${value}`;
      setFocusedIndex(newValue.length);
      onPinChange(newValue);
    }
  };
  return {verify, handleKeyPress, pin, onPinChange, focusedIndex};
};
