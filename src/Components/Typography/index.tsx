import React from 'react';
import {
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import {COLORS} from '@/Theme/Colors';

export type FontWeight =
  | '100' // Thin
  | '200' // UltraLight
  | '300' // Light
  | '400' // Regular
  | '500' // Medium
  | '600' // SemiBold
  | '700' // Bold
  | '800' // Heavy
  | '900'; // Black

export type TypographyProps = TextProps & {
  size?: number;
  weight?: FontWeight;
  uppercase?: boolean;
  capitalize?: boolean;
  color?: ColorValue;
  children?: string | Element | Element[] | React.ReactNode | React.ReactNode[];
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  testingSuffix?: string;
};

export const Typography = ({
  size = 14,
  weight = '400',
  uppercase,
  capitalize,
  children,
  color = COLORS.GREY800,
  style = {},
  testingSuffix,
  ...restNativeProps
}: TypographyProps) => {
  const getFontFamily = () => {
    switch (weight) {
      case '100':
        return 'SF-Pro-Display-Thin';
      case '200':
        return 'SF-Pro-Display-UltraLight';
      case '300':
        return 'SF-Pro-Display-Light';
      case '400':
        return 'SF-Pro-Display-Regular';
      case '500':
        return 'SF-Pro-Display-Medium';
      case '600':
        return 'SF-Pro-Display-SemiBold';
      case '700':
        return 'SF-Pro-Display-Bold';
      case '800':
        return 'SF-Pro-Display-Heavy';
      case '900':
        return 'SF-Pro-Display-Black';
      default:
        return 'SF-Pro-Display-Regular';
    }
  };

  return (
    <Text
      style={[
        {
          fontSize: size,
          lineHeight: size * 1.2 + 4,
          fontFamily: getFontFamily(),
        },
        uppercase && styles.uppercase,
        capitalize && styles.capitalize,
        !!color && {color},
        style,
      ]}
      {...restNativeProps}
      testID={testingSuffix}
      accessibilityLabel={testingSuffix}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});
