import {COLORS} from '../../Theme/Colors';
import React from 'react';
import {
  ColorValue,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {PressableOpacityProps, PressableOpacity} from './PressableOpacity';
import {Spacer} from '../Spacer';
import {Typography} from '../Typography';

export type ButtonProps = PressableOpacityProps & {
  title?: string;
  color?: ColorValue;
  outline?: boolean;
  small?: boolean;
  round?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  title,
  color,
  children,
  disabled = false,
  outline = false,
  small = false,
  round = false,
  loading = false,
  icon,
  style,
  buttonStyle,
  buttonContainerStyle,
  textStyle,
  ...props
}: ButtonProps) => {
  const buttonText = title || (typeof children === 'string' ? children : '');

  const buttonContainerStyles = StyleSheet.flatten([
    styles.buttonContainer,
    small && {alignItems: 'center'},
    style,
  ]);

  const buttonStyles = StyleSheet.flatten([
    styles.button,
    {backgroundColor: color ? color : COLORS.PRIMARY_BASE},
    disabled && {opacity: 0.6},
    outline && {
      ...styles.outline,
      borderColor: color ? color : COLORS.PRIMARY_BASE,
    },
    round && styles.round,
    buttonStyle,
  ]);

  const buttonContentStyles = StyleSheet.flatten([
    styles.buttonContent,
    buttonContainerStyle,
  ]);

  const textStyles = StyleSheet.flatten([
    styles.defaultTextStyle,
    {
      color:
        color && outline ? color : outline ? COLORS.PRIMARY_BASE : COLORS.WHITE,
    },
    textStyle,
  ]);

  return (
    <View style={buttonContainerStyles as ViewStyle}>
      <PressableOpacity
        disabled={disabled || loading}
        style={buttonStyles as ViewStyle}
        {...props}>
        <View style={buttonContentStyles}>
          {icon && icon}
          {icon && children && <Spacer width={8} />}
          {buttonText && (
            <Typography
              size={14}
              weight="700"
              style={textStyles}
              numberOfLines={1}>
              {buttonText as string}
            </Typography>
          )}
        </View>
      </PressableOpacity>
      {loading && <ActivityIndicator />}
    </View>
  );
};

const MIN_SIZE = 44;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: 24,
  },
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    minHeight: MIN_SIZE,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultTextStyle: {
    flexShrink: 1,
  },
  loadingIndicator: {
    position: 'absolute',
    right: 16,
  },
  outline: {
    backgroundColor: COLORS.TRANSPARENT,
    borderWidth: 1,
  },
  round: {
    borderRadius: MIN_SIZE,
    minWidth: MIN_SIZE,
  },
});
