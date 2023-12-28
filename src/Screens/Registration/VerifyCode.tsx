import {StyleSheet, View} from 'react-native';
import React from 'react';
import {OnScreenNumericKeyboard} from '../../Components/Input/OnScreenNumericKeypad';
import {Spacer} from '../../Components/Spacer';
import {Typography} from '../../Components/Typography';
import {GLOBALS} from '../../Constants/Global';
import {COLORS} from '../../Theme/Colors';
import {layouts} from '../../Theme/Styles/Layout';
import {AuthStackScreenProps} from '../../Navigators/types';
import {useVerifyCodeViewModel} from './ViewModels/verify_code_viewmodel';
import {Button} from '../../Components/Button/Button';
import {PressableOpacity} from '../../Components/Button/PressableOpacity';
import {PinInput} from '../../Components/Input/PinInput';

export const VerifyCode = ({
  navigation,
}: AuthStackScreenProps<'VerifyCode'>) => {
  const controller = useVerifyCodeViewModel(navigation);
  return (
    <View style={styles.container}>
      <Typography size={20} weight="700" center>
        Enter verification code
      </Typography>
      <Spacer height={8} />
      <Typography color={COLORS.GREY600} center>
        {'We have sent the code verification to\nyour mobile number '}
      </Typography>
      <Spacer height={40} />
      <PinInput
        pin={controller.pin}
        focusedIndex={controller.focusedIndex}
        onPinChange={controller.onPinChange}
      />
      <Spacer height={32} />
      <PressableOpacity>
        <Typography weight="700" color={COLORS.PRIMARY_BASE} center>
          Resend Code
        </Typography>
      </PressableOpacity>
      <View style={layouts.fill} />
      <OnScreenNumericKeyboard onKeyPress={controller.handleKeyPress} />
      <Spacer height={16} />
      <Button title="Send Code" onPress={controller.verify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    alignContent: 'center',
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
    paddingVertical: GLOBALS.SCREEN_V_PADDING,
  },
});
