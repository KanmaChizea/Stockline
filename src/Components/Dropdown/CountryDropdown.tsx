import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Theme/Colors';
import {Icons} from '../../Theme/Icons';
import {layouts} from '../../Theme/Styles/Layout';
import {Spacer} from '../Spacer';

export const CountryDropdown = ({
  icon,
  showModal,
}: {
  icon: React.ReactNode;
  showModal: () => void;
}) => {
  return (
    <Pressable onPress={showModal} style={styles.container}>
      {icon}
      <Spacer width={4} />
      <Icons.Dropdown />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
    paddingLeft: 16,
    borderRightWidth: 1,
    borderRightColor: COLORS.GREY600,
    ...layouts.rowHCenter,
  },
});
