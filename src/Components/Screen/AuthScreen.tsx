import {Dimensions, Image, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../Theme/Images';
import {layouts} from '../../Theme/Styles/Layout';
import {COLORS} from '../../Theme/Colors';
import {Typography} from '../Typography';
import {Icons} from '../../Theme/Icons';
import {GLOBALS} from '../../Constants/Global';
import {Spacer} from '../Spacer';
import {Button} from '../Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type AuthScreenProps = {
  headerText: string;
  headerWithWave?: boolean;
  subtext: string;
  emphasisedSubText?: string;
  type: 'login' | 'signup';
  children: React.ReactNode | React.ReactNode[];
  onLinkTextPress: () => void;
};

const Line = () => {
  return <View style={styles.line} />;
};
const AuthScreen = ({
  headerText,
  headerWithWave,
  subtext,
  emphasisedSubText,
  type,
  children,
  onLinkTextPress,
}: AuthScreenProps) => {
  const isLogin = type === 'login';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={layouts.fill}
        contentContainerStyle={layouts.scrollSpaceBetween}
        extraScrollHeight={Platform.select({ios: 70, android: 30})}
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <View style={layouts.relative}>
          <Image
            source={IMAGES.LOGO}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.greetingText}>
            <Typography size={20} weight="700">
              {headerText}
            </Typography>
            {headerWithWave && <Icons.Wave />}
          </View>
        </View>
        <View style={layouts.fill}>
          <Typography size={14} color={COLORS.GREY600} center>
            {subtext}
            <Typography color={COLORS.PRIMARY_BASE} weight="700">
              {emphasisedSubText}
            </Typography>
          </Typography>
          <Spacer height={32} />
          <View style={layouts.fill}>{children}</View>
          <View style={layouts.rowHCenter}>
            <Line />
            <Typography color={COLORS.GREY600} style={styles.margin}>
              {isLogin ? 'Or login with' : 'Or continue with'}
            </Typography>
            <Line />
          </View>
          <Spacer height={16} />
          <View style={layouts.row}>
            <Button
              icon={<Icons.Google />}
              style={layouts.fill}
              outline
              color={COLORS.GREY400}
            />
            <Spacer width={16} />
            <Button
              icon={<Icons.Apple />}
              style={layouts.fill}
              outline
              color={COLORS.GREY400}
            />
          </View>
          <Typography weight="500" center>
            {isLogin
              ? 'Don’t have an account?  '
              : 'Already have an account?  '}
            <Typography
              weight="700"
              color={COLORS.PRIMARY_BASE}
              onPress={onLinkTextPress}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Typography>
          </Typography>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingVertical: GLOBALS.SCREEN_V_PADDING,
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.56,
  },
  greetingText: {
    marginTop: -24,
    position: 'absolute',
    bottom: 14,
    alignSelf: 'center',
    ...layouts.rowHCenter,
  },
  line: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: COLORS.GREY400,
  },
  margin: {
    marginHorizontal: 12,
  },
});
