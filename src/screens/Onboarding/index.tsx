import {StyleSheet, View} from 'react-native';
import Layout from '../../components/Layout';
import StyledText from '../../components/BText';
import {theme} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';
import {Button} from '../../components/Button';

const OnboardingPage = () => {
  const nav = useNavigation<RootNavigation>();

  return (
    <Layout>
      <View style={styles.containerView}>
        <StyledText weight="semiBold" size={23} style={{marginBottom: 5}}>
          Welcome to BetScore
        </StyledText>
        <Button
          label="Sign Up"
          onPress={() => nav.navigate('Auth', {screen: 'SignIn'})}
          containerStyle={styles.signUpButtonStyle}
          fullWidth
        />
        <Button
          onPress={() => nav.navigate('Auth', {screen: 'SignUp'})}
          label="Sign In"
          fullWidth
          variant="outlined"
          containerStyle={styles.signInbuttonStyle}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  container: {
    width: '45%',
    marginVertical: 5,
    borderRadius: '2px',
  },
  signUpButtonStyle: {
    backgroundColor: theme.colors.black,
    borderRadius: 10,
    width: '45%',
    color: theme.colors.white,
  },
  signInbuttonStyle: {
    marginTop: 10,
    width: '45%',
  },
});

export default OnboardingPage;
