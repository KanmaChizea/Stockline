import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useRegistrationCompleteViewModel} from './ViewModels/registeration_complete_view_model';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../Theme/Images';
import {layouts} from '../../Theme/Styles/Layout';
import {Typography} from '../../Components/Typography';
import {GLOBALS} from '../../Constants/Global';
import {Spacer} from '../../Components/Spacer';
import {COLORS} from '../../Theme/Colors';
import {Icons} from '../../Theme/Icons';
import {Button} from '../../Components/Button/Button';

export const RegistrationComplete = () => {
  const {username, onButtonPress} = useRegistrationCompleteViewModel();
  return (
    <SafeAreaView style={styles.container}>
      <View style={layouts.relative}>
        <Image
          source={IMAGES.LOGO_VARIANT}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={layouts.rowHCenter}>
            <Typography
              weight="600"
              size={24}>{`Hello ${username} `}</Typography>
            <Icons.Wave />
          </View>
          <Spacer height={8} />
          <Typography weight="600" size={24}>
            Welcome to Stockline
          </Typography>
          <Spacer height={24} />
          <Typography color={COLORS.GREY600}>
            It’s great to have you here
          </Typography>
        </View>
      </View>
      <View style={layouts.fill} />
      <Button title="I’m ready to start!" onPress={onButtonPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
    paddingVertical: GLOBALS.SCREEN_V_PADDING,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.87,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
