import {StyleSheet, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import Layout from '../../components/Layout';
import StyledText from '../../components/BText';
import {theme} from '../../theme/theme';
import {supabase} from '../../libs/superbase';
import {useRoute} from '@react-navigation/native';
import {AuthRoute} from '../../routes/Auth';
import {useAuth} from '../../context/AuthContext';
const OTPVerify = () => {
  const {
    params: {email},
  } = useRoute<AuthRoute<'OTPVerify'>>();

  const {OTPVerify} = useAuth();
  const handleSubmit = async (pin: string) => {
    OTPVerify(pin, email);
  };
  return (
    <Layout>
      <View style={styles.root}>
        <StyledText size={20} weight="semiBold">
          Check your Email
        </StyledText>
        <StyledText size={15} style={styles.otpText}>
          We sent you a verification code on {email}
        </StyledText>
        <OtpInput
          numberOfDigits={6}
          focusColor={theme.colors.primary}
          focusStickBlinkingDuration={500}
          onFilled={text => handleSubmit(text)}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
          theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    marginTop: -250,
    justifyContent: 'center',
  },
  container: {
    marginTop: 20,
  },

  pinCodeContainer: {
    width: 50,
    height: 50,
  },
  pinCodeText: {fontWeight: 600, color: theme.colors.primary},
  focusStick: {},
  activePinCodeContainer: {},
  otpText: {
    marginTop: 20,
  },
});

export default OTPVerify;
