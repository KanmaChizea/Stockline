import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {layouts} from '../../Theme/Styles/Layout';
import {COLORS} from '../../Theme/Colors';
import {Spacer} from '../Spacer';

type InputFieldProps = TextInputProps & {
  suffixComponent?: React.ReactNode;
  prefixComponent?: React.ReactNode;
  isFocused: boolean;
};
export const InputField = ({
  suffixComponent,
  prefixComponent,
  isFocused,
  value,
  ...restProps
}: InputFieldProps) => {
  return (
    <View
      style={[
        layouts.rowHCenter,
        styles.inputBorder,
        isFocused && styles.activeBorder,
        value ? styles.activeBorder : {},
      ]}>
      {prefixComponent && prefixComponent}
      <TextInput
        style={[styles.text, layouts.fill]}
        placeholderTextColor={COLORS.GREY600}
        selectionColor={COLORS.PRIMARY_BASE}
        {...restProps}
      />
      {suffixComponent && suffixComponent}
      {suffixComponent && <Spacer width={16} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBorder: {
    borderWidth: 1,
    borderColor: COLORS.GREY600,
    borderRadius: 16,
  },
  activeBorder: {
    borderColor: COLORS.PRIMARY_BASE,
  },
  text: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontFamily: 'SF-Pro-Display',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.GREY800,
  },
});
