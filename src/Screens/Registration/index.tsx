import {Pressable} from 'react-native';
import React from 'react';
import AuthScreen from '../../Components/Screen/AuthScreen';
import {useRegisterViewmodel} from './viewmodel';
import {InputField} from '../../Components/Input/InputField';
import {Spacer} from '../../Components/Spacer';
import {ICONS} from '../../Theme/Icons';
import {AuthStackScreenProps} from '../../Navigators/types';
import {Button} from '../../Components/Button/Button';

export const Register = ({navigation}: AuthStackScreenProps<'Register'>) => {
  const controller = useRegisterViewmodel(navigation);
  return (
    <AuthScreen
      headerText="Join Stockline"
      subtext={
        'Start investing for your favorite companies\nwith as little as '
      }
      emphasisedSubText="$1"
      onLinkTextPress={() => {}}
      type="signup">
      <InputField
        value={controller.usernameValue}
        isFocused={controller.isUsernameFocused}
        placeholder="Username"
        onBlur={controller.onUsernameBlur}
        onFocus={controller.onUsernameFocus}
        onChangeText={controller.onUsernameChange}
      />
      <Spacer height={12} />
      <InputField
        value={controller.emailValue}
        isFocused={controller.isEmailFocused}
        placeholder="Email"
        onBlur={controller.onEmailBlur}
        onFocus={controller.onEmailFocus}
        onChangeText={controller.onEmailChange}
      />
      <Spacer height={12} />
      <InputField
        value={controller.passwordValue}
        isFocused={controller.isPasswordFocused}
        placeholder="Password"
        secureTextEntry={controller.hidePassword}
        onBlur={controller.onPasswordBlur}
        onFocus={controller.onPasswordFocus}
        onChangeText={controller.onPasswordChange}
        suffixComponent={
          <Pressable onPress={controller.togglePasswordVisibility}>
            <ICONS.EyeOff />
          </Pressable>
        }
      />
      <Spacer height={24} />
      <Button title="Continue" onPress={controller.gotoVerify} />
    </AuthScreen>
  );
};
