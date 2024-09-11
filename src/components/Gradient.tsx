import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

interface Props {
  style?: StyleProp<ViewStyle>;
  variant?: 'purple' | 'orange';
  halfGradientDivider?: boolean;
  halfGradientPercentage?: number;
}

const getOrangeGradient = (halfGradientDivider: boolean) =>
  halfGradientDivider
    ? ['#DC1F5C', '#EE2D89', '#EA4335']
    : ['#DC1F5C', '#EE2D89', '#EA4335', '#FBBC04'];

const Gradient = ({
  style,
  variant = 'purple',
  halfGradientDivider = false,
  halfGradientPercentage = 0,
}: Props) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={
      variant === 'orange'
        ? getOrangeGradient(halfGradientDivider)
        : ['#981942', '#dc1f5c', '#ff6c00']
    }
    style={[
      !halfGradientDivider
        ? StyleSheet.absoluteFill
        : [
            StyleSheet.absoluteFill,
            {right: `${100 - halfGradientPercentage}%`},
          ],
      style,
    ]}
  />
);

export default Gradient;
