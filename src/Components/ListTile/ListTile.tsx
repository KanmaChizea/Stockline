import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Typography} from '../Typography';
import {Spacer} from '../Spacer';
import {layouts} from '../../Theme/Styles/Layout';
import {COLORS} from '../../Theme/Colors';
import {PressableOpacity} from '../Button/PressableOpacity';

type ListTileProps = {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  title: string;
  onPress?: () => void;
};
const ListTile = ({leading, trailing, title, onPress}: ListTileProps) => {
  return (
    <PressableOpacity activeOpacity={onPress ? 0.6 : 1} onPress={onPress}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          {leading && leading}
          {leading && <Spacer width={24} />}
          <Typography>{title}</Typography>
        </View>
        {trailing && trailing}
      </View>
    </PressableOpacity>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  inner: {
    ...layouts.rowHCenter,
  },
  outer: {
    ...layouts.rowHCenter,
    ...layouts.justifyContentBetween,
    paddingHorizontal: 8,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY400,
  },
});
