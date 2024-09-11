import React, {useEffect, useRef, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {ErrorMessage} from './ErrorMessage';
import StyledText from './BText';
import {theme} from '../theme/theme';

export type InputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  focusedInputContainerStyle?: StyleProp<ViewStyle>;
  errorMessageStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textStyleContainer?: StyleProp<TextStyle>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  errorMessage?: string;
  label?: string;
  disabled?: boolean;
  withoutErrorIcon?: boolean;
  caretColor?: string;
  placeholderTextColor?: string;
  returnKeyType?: string;
} & TextInputProps;

export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      disabled = false,
      returnKeyType = 'none',
      containerStyle,
      inputContainerStyle,
      inputWrapperStyle,
      focusedInputContainerStyle,
      errorMessageStyle,
      inputStyle,
      errorMessage,
      leftIcon,
      rightIcon,
      placeholderTextColor = 'black',
      label,
      onFocus,
      onBlur,
      caretColor,
      textStyleContainer,
      withoutErrorIcon,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<TextInput>(null);
    useEffect(() => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(ref.current);
      }
    }, [forwardedRef]);

    const [focused, setFocused] = useState(false);

    const styles = StyleSheet.create({
      container: {
        width: '100%',
      },
      inputContainer: {
        borderRadius: 10,
        borderColor: theme.colors.greyish,
        backgroundColor: theme.colors.offWhite,
        borderWidth: 0.5,
      },
      disabled: {
        opacity: 0.6,
      },
      label: {
        marginBottom: 10,
      },
      input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 48,
      },
      text: {
        flex: 1,
      },
      inputError: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.error,
      },
      errorMessageStyleDefault: {
        alignSelf: 'center',
      },
      focusedInput: {
        borderWidth: 1,
        // TODO: get rid of react-native-elements entirely
        borderBottomWidth: 1,
        borderColor: theme.colors.primary,
      },
    });

    return (
      <View
        style={[styles.container, containerStyle, disabled && styles.disabled]}>
        {label && (
          <StyledText style={styles.label} weight="medium">
            {label}
          </StyledText>
        )}
        <TouchableWithoutFeedback onPress={() => ref.current?.focus()}>
          <View
            style={[
              styles.inputContainer,
              inputContainerStyle,
              focused && [styles.focusedInput, focusedInputContainerStyle],
              Boolean(errorMessage) && styles.inputError,
            ]}>
            <View style={[styles.input, inputWrapperStyle]}>
              {leftIcon && <View>{leftIcon}</View>}
              <View style={[styles.text, textStyleContainer]}>
                <TextInput
                  style={[theme.textStyle, inputStyle]}
                  ref={ref}
                  returnKeyType={returnKeyType}
                  {...rest}
                  placeholderTextColor={placeholderTextColor}
                  selectionColor={caretColor}
                  onFocus={e => {
                    setFocused(true);
                    onFocus?.(e);
                  }}
                  onBlur={e => {
                    setFocused(false);
                    onBlur?.(e);
                  }}
                />
              </View>
              {rightIcon && <View>{rightIcon}</View>}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <ErrorMessage
          message={errorMessage}
          messageStyle={errorMessageStyle}
          withoutIcon={withoutErrorIcon}
        />
      </View>
    );
  },
);
