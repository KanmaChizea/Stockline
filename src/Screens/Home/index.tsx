import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography} from '../../Components/Typography';
import {Button} from '../../Components/Button/Button';
import {Spacer} from '../../Components/Spacer';
import {GLOBALS} from '../../Constants/Global';
import {AppStackScreenProps} from '../../Navigators/types';

export const Home = ({navigation}: AppStackScreenProps<'Home'>) => {
  const logout = () => {
    navigation.reset({routes: [{name: 'Auth', params: {screen: 'Login'}}]});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography center>You are logged in to</Typography>
      <Spacer height={8} />
      <Typography weight="700" size={32} center>
        Stockline
      </Typography>
      <Spacer height={100} />
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    paddingHorizontal: GLOBALS.SCREEN_H_PADDING,
  },
});
