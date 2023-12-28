import React from 'react';
import AuthScreen from '../../Components/Screen/AuthScreen';
import {Pressable} from 'react-native';
import {InputField} from '../../Components/Input/InputField';
import {Spacer} from '../../Components/Spacer';
import {Button} from '../../Components/Button/Button';
import {PressableOpacity} from '../../Components/Button/PressableOpacity';
import {Typography} from '../../Components/Typography';
import {COLORS} from '../../Theme/Colors';
import {Icons} from '../../Theme/Icons';
import {useLoginViewmodel} from './viewmodel';
import {AuthStackScreenProps} from '../../Navigators/types';

export const Login = ({navigation}: AuthStackScreenProps<'Login'>) => {
  const controller = useLoginViewmodel(navigation);
  return (
    <AuthScreen
      headerText="Hi there! "
      headerWithWave
      subtext="Welcome back, Sign in to your account"
      onLinkTextPress={controller.goToSignup}
      type="login">
      <InputField
        value={controller.emailValue}
        isFocused={controller.isEmailFocused}
        placeholder="Email"
        onBlur={controller.onEmailBlur}
        onFocus={controller.onEmailFocus}
        onChangeText={controller.onEmailChange}
        keyboardType="email-address"
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
            <Icons.EyeOff />
          </Pressable>
        }
      />
      <Spacer height={24} />
      <Button title="Login" onPress={controller.login} />
      <PressableOpacity>
        <Typography center color={COLORS.PRIMARY_BASE} weight="600">
          Forgot password?
        </Typography>
      </PressableOpacity>
    </AuthScreen>
  );
};
