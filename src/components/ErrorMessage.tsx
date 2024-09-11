// import {Pin} from 'assets';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import StyledText from './BText';
import {theme} from '../theme/theme';

export interface ErrorMessageProps {
  message?: string;
  messageStyle?: StyleProp<ViewStyle>;
  containerMessageStyle?: StyleProp<ViewStyle>;
  withoutIcon?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  messageStyle,
  containerMessageStyle,
  withoutIcon,
}) => {
  if (!message) {
    return null;
  }

  return (
    <View style={[styles.errorContainer, containerMessageStyle]}>
      {/* {!withoutIcon && (
        <View style={styles.errorMessageIcon}>
          <Pin fill={theme.palette.inputError} />
        </View>
      )} */}

      <StyledText
        size={13}
        weight="medium"
        color={theme.colors.inputError}
        style={[styles.errorMessageStyleDefault, messageStyle]}>
        {message}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessageIcon: {
    alignSelf: 'flex-start',
  },
  errorMessageStyleDefault: {
    flex: 1,
    marginStart: 10,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
