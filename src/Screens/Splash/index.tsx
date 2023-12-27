import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {layouts} from '../../Theme/Styles/Layout';
import {Typography} from '../../Components/Typography';
import {COLORS} from '../../Theme/Colors';
import {useSplashViewmodel} from './viewmodel';

export const SplashScreen = () => {
  const {initializeApp} = useSplashViewmodel();

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  return (
    <SafeAreaView style={[layouts.center, layouts.fill, layouts.row]}>
      <Typography weight="700" size={40}>
        Stockline
      </Typography>
      <Typography weight="700" size={40} color={COLORS.PRIMARY_BASE}>
        .
      </Typography>
    </SafeAreaView>
  );
};
