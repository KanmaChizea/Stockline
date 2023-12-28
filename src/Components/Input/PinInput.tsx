import React from 'react';
import {StyleSheet, Text, Keyboard, View} from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {COLORS} from '../../Theme/Colors';

type PinInputProps = {
  pin: string;
  onPinChange(pin: string): void;
  focusedIndex: number;
};

export const PinInput = ({
  pin = '',
  onPinChange,
  focusedIndex,
}: PinInputProps) => {
  const ref = useBlurOnFulfill({value: pin, cellCount: 4});
  const [hookProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: pin,
    setValue: onPinChange,
  });

  return (
    <CodeField
      ref={ref}
      {...hookProps}
      value={pin}
      cellCount={4}
      editable={false}
      rootStyle={styles.container}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      onSubmitEditing={Keyboard.dismiss}
      renderCell={({index, symbol}) => {
        const isFocused = index === focusedIndex;
        return (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusedCell]}>
            {isFocused && !symbol ? (
              <View style={styles.dash} />
            ) : (
              <Text
                key={index}
                style={styles.text}
                onLayout={() => getCellOnLayoutHandler(index)}>
                {symbol}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  cell: {
    borderColor: COLORS.GREY400,
    borderWidth: 1,
    borderRadius: 12,
    height: 56,
    width: 56,
    marginHorizontal: 8,
  },
  text: {
    alignSelf: 'center',
    color: COLORS.GREY800,
    fontFamily: 'SF-Pro-Display',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    height: 52,
    width: 52,
    lineHeight: 52,
  },
  focusedCell: {
    borderColor: COLORS.PRIMARY_BASE,
  },
  dash: {
    height: 2,
    width: 24,
    backgroundColor: COLORS.PRIMARY_BASE,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 14,
  },
});
