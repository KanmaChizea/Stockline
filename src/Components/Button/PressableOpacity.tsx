import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';

export type PressableOpacityProps = PressableProps & {
  testingSuffix: string;
  debounceWait?: number;
  activeOpacity?: number;
};

export const PressableOpacity = ({
  children,
  disabled,
  style,
  onPress,
  activeOpacity = 0.4,
  testingSuffix,
  ...props
}: PressableOpacityProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? activeOpacity : 1},
        style as ViewStyle,
      ]}
      hitSlop={5}
      disabled={disabled}
      onPress={onPress}
      {...props}
      testID={testingSuffix}
      accessibilityLabel={testingSuffix}>
      {children}
    </Pressable>
  );
};
