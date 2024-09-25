import {StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/Layout';
import StyledText from '../../components/BText';
import InputText from '../../components/Input';
import {theme} from '../../theme/theme';
import {Button} from '../../components/Button';
import Google from '../../assets/icons/googl.svg';
import Facebook from '../../assets/icons/facebook.svg';
import {Divider} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';
import {useForm, Controller} from 'react-hook-form';
import {supabase} from '../../libs/superbase';
import {useAuth} from '../../context/AuthContext';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {signup} = useAuth();

  const nav = useNavigation<RootNavigation>();

  const onSubmit = handleSubmit(async data => {
    signup(data.email, data.password);
  });

  return (
    <Layout>
      <View style={styles.root}>
        <StyledText size={25} weight="semiBold">
          Sign Up
        </StyledText>
        <View style={styles.loginView}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                placeholderTextColor={theme.colors.foggy}
                focusedInputContainerStyle={styles.focusedInputContainerStyle}
                inputContainerStyle={styles.inputContainerStyle}
              />
            )}
            name="email"
          />
          {errors.email && (
            <StyledText color={theme.colors.brightRed}>
              {errors.email.message}
            </StyledText>
          )}

          <View style={{marginTop: 30, marginBottom: 40}}>
            <Controller
              control={control}
              rules={{
                required: true,
                min: {
                  value: 6,
                  message: 'Too Short',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputText
                  secureTextEntry={true}
                  inputContainerStyle={styles.inputContainerStyle}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Password"
                  value={value}
                  placeholderTextColor={theme.colors.foggy}
                  focusedInputContainerStyle={styles.focusedInputContainerStyle}
                />
              )}
              name="password"
            />
          </View>

          {errors.password && (
            <StyledText color={theme.colors.brightRed}>
              {errors.password.message}
            </StyledText>
          )}

          <Button
            fullWidth
            label="Sign up"
            backgroundColor={theme.colors.primary}
            onPress={handleSubmit(onSubmit)}
          />
          <Divider style={{marginVertical: 30}} />
          <View style={styles.socialView}>
            <View style={styles.googleView}>
              <Google />
              <StyledText
                size={15}
                weight="regular"
                style={{marginTop: 10, marginLeft: 12}}>
                Sign in with Google
              </StyledText>
            </View>
            <View style={styles.faceBookView}>
              <View style={{marginTop: 5}}>
                <Facebook />
              </View>
              <StyledText
                size={15}
                weight="regular"
                style={{marginTop: 6, marginLeft: 12}}>
                Sign in with Facebook
              </StyledText>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    backgroundColor: theme.colors.background,
  },
  loginView: {
    marginTop: 60,
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
  inputContainerStyle: {
    borderBottomColor: theme.colors.foggy,
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontSize: 16,
  },
  focusedInputContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    color: theme.colors.primary,
    fontSize: 16,
  },
  socialView: {
    marginTop: 10,
  },
  googleView: {
    borderColor: theme.colors.greyish,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  faceBookView: {
    borderColor: theme.colors.greyish,
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignUp;
