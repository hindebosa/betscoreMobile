import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/Layout';
import StyledText from '../../components/BText';
import {Input} from '../../components/Input';
import {theme} from '../../theme/theme';
import {Button} from '../../components/Button';
import Google from '../../assets/icons/googl.svg';
import Facebook from '../../assets/icons/facebook.svg';
import {Divider} from '@rneui/themed';

const SignIn = () => {
  return (
    <Layout>
      <View style={styles.root}>
        <StyledText size={35}>Sign In!</StyledText>
        <View style={styles.loginView}>
          <Input
            placeholder="Email"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <Input
            placeholder="Password"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <Divider style={{margin: 20}} />
          <View style={styles.socialView}>
            <View style={styles.googleView}>
              <Google />
              <StyledText
                size={18}
                weight="semiBold"
                style={{marginTop: 13, marginLeft: 12}}>
                Google
              </StyledText>
            </View>
            <View style={styles.faceBookView}>
              <View style={{marginTop: 10}}>
                <Facebook />
              </View>

              <StyledText
                size={18}
                weight="semiBold"
                style={{marginTop: 13, marginLeft: 12}}>
                Facebook
              </StyledText>
            </View>
          </View>
          <Divider style={{margin: 20}} />
          <Button
            fullWidth
            label="Sign up"
            backgroundColor={theme.colors.primary}
          />
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  root: {justifyContent: 'center', alignItems: 'center', marginTop: 120},
  loginView: {
    marginTop: 60,
    borderColor: theme.colors.greyish,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    width: '95%',
  },
  containerStyle: {
    paddingBottom: 7,
    marginVertical: 10,
  },
  inputText: {
    color: '#000',
  },
  focusedInputContainerStyle: {
    borderColor: theme.colors.smoothRed,
    backgroundColor: '#fff',
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleView: {
    borderColor: theme.colors.greyish,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  faceBookView: {
    borderColor: theme.colors.greyish,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SignIn;
