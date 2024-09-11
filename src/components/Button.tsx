import React, {useMemo} from 'react';
import {
  ViewStyle,
  StyleSheet,
  StyleProp,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  DimensionValue,
} from 'react-native';

import Gradient from './Gradient';
import StyledText, {StyledTextProps} from './BText';
import {theme} from '../theme/theme';

interface Props {
  label: string;
  labelProps?: StyledTextProps;
  gradient?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  height?: number;
  width?: DimensionValue;
  variant?: 'contained' | 'outlined';
  noDisabledBackground?: boolean;
  backgroundColor?: string;
  borderRadius?: number;
  containerStyle?: StyleProp<ViewStyle>;
  leftItem?: JSX.Element;
  rightItem?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<
  Omit<TouchableHighlightProps, 'style'> & Props
> = ({
  label,
  labelProps,
  containerStyle,
  gradient,
  rounded,
  fullWidth,
  disabled,
  style,
  noDisabledBackground,
  height = 48,
  variant = 'contained',
  underlayColor,
  activeOpacity,
  leftItem,
  rightItem,
  width = 108,
  backgroundColor,
  borderRadius,
  ...rest
}) => {
  const customBackgroundColor = useMemo(() => {
    if (backgroundColor) {
      return backgroundColor;
    }
    return disabled && !noDisabledBackground
      ? theme.colors.underlineInput
      : variant === 'contained'
      ? theme.colors.black
      : theme.colors.black;
  }, [backgroundColor, disabled, noDisabledBackground, variant]);

  const customBorderRadius = useMemo(() => {
    if (borderRadius) {
      return borderRadius;
    }
    return rounded ? 30 : 10;
  }, [borderRadius, rounded]);

  const styles = StyleSheet.create({
    root: {
      height,
    },
    default: {
      backgroundColor: customBackgroundColor,
      borderWidth:
        gradient ||
        (disabled && !noDisabledBackground) ||
        variant !== 'outlined'
          ? 0
          : 1,
      borderColor: theme.colors.black,
      borderRadius: customBorderRadius,
      width: fullWidth ? '100%' : width,
      height,
      paddingHorizontal: 13,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    gradient: {
      borderRadius: rounded ? 30 : 0,
      height,
    },
    itemLeft: {
      flex: 1,
    },
    itemRight: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });

  return (
    <TouchableHighlight
      underlayColor={underlayColor || theme.colors.white}
      // careful with the zeros here
      activeOpacity={activeOpacity === undefined ? 0.2 : activeOpacity}
      disabled={disabled}
      style={[styles.root, containerStyle]}
      {...rest}>
      <View style={[styles.default, style]}>
        {gradient && (!disabled || noDisabledBackground) && (
          <Gradient style={styles.gradient} variant="orange" />
        )}
        <View style={styles.itemLeft}>{leftItem}</View>
        <StyledText
          color={
            gradient || disabled || variant === 'contained'
              ? theme.colors.white
              : theme.colors.primary
          }
          bold={gradient}
          {...labelProps}>
          {label}
        </StyledText>
        <View style={styles.itemRight}>{rightItem}</View>
      </View>
    </TouchableHighlight>
  );
};
