import {useState} from 'react';
import {AuthStackParamList} from '../../Navigators/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useFormFields from '../../Hooks/formfields';
import {Alert} from 'react-native';

export const useLoginViewmodel = (
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login', undefined>,
) => {
  const [hidePassword, setHidePassword] = useState(true);
  const {values, isFocused, handleFocusChange, handleValueChange} =
    useFormFields(2);

  const emailValue = values[0];
  const isEmailFocused = isFocused[0];
  const onEmailChange = (value: string) =>
    handleValueChange({index: 0, value: value});
  const onEmailFocus = () => handleFocusChange({index: 0, focused: true});
  const onEmailBlur = () => handleFocusChange({index: 0, focused: false});

  const passwordValue = values[1];
  const isPasswordFocused = isFocused[1];
  const onPasswordChange = (value: string) =>
    handleValueChange({index: 1, value: value});
  const onPasswordFocus = () => handleFocusChange({index: 1, focused: true});
  const onPasswordBlur = () => handleFocusChange({index: 1, focused: false});

  const togglePasswordVisibility = () => setHidePassword(!hidePassword);

  const goToSignup = () => navigation.navigate('Register');

  const login = () => {
    if (emailValue && passwordValue) {
      navigation.reset({routes: [{name: 'App'}]});
    } else {
      Alert.alert('Error', 'Please fill all required fields', [{text: 'OK'}], {
        cancelable: false,
      });
    }
  };

  return {
    hidePassword,
    togglePasswordVisibility,
    goToSignup,
    login,
    emailValue,
    isEmailFocused,
    onEmailChange,
    onEmailFocus,
    onEmailBlur,
    passwordValue,
    isPasswordFocused,
    onPasswordChange,
    onPasswordBlur,
    onPasswordFocus,
  };
};
