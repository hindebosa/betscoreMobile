import Layout from '../../components/Layout';
import * as React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {theme} from '../../theme/theme';
import StyledText from '../../components/BText';
import InputText from '../../components/Input';
import {Button} from '../../components/Button';
import {useAuth} from '../../context/AuthContext';
import {useForm, Controller} from 'react-hook-form';

const PersonalInformation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      username: '',
      idNumber: '',
    },
  });

  const {updateUser} = useAuth();

  const onSubmit = handleSubmit(data => {
    updateUser(data.fullName, data.username, data.phone, data.idNumber);
  });

  return (
    <Layout>
      <View style={styles.root}>
        <View style={{padding: 20, flex: 1}}>
          <StyledText size={22} weight="semiBold">
            Personal Infomation
          </StyledText>
          <View style={{marginTop: 40, gap: 30, flex: 1}}>
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
                  placeholder="Full Name"
                  inputStyle={styles.inputText}
                  caretColor={theme.colors.smoothRed}
                  placeholderTextColor={theme.colors.foggy}
                  focusedInputContainerStyle={styles.focusedInputContainerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name="fullName"
            />
            {errors.fullName && (
              <StyledText color={theme.colors.brightRed}>
                {errors.fullName.message}
              </StyledText>
            )}
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
                  placeholder="ID Number"
                  inputStyle={styles.inputText}
                  caretColor={theme.colors.smoothRed}
                  placeholderTextColor={theme.colors.foggy}
                  focusedInputContainerStyle={styles.focusedInputContainerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name="idNumber"
            />
            {errors.idNumber && (
              <StyledText color={theme.colors.brightRed}>
                {errors.idNumber.message}
              </StyledText>
            )}

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
                  placeholder="Username"
                  inputStyle={styles.inputText}
                  caretColor={theme.colors.smoothRed}
                  placeholderTextColor={theme.colors.foggy}
                  focusedInputContainerStyle={styles.focusedInputContainerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name="username"
            />
            {errors.username && (
              <StyledText color={theme.colors.brightRed}>
                {errors.username.message}
              </StyledText>
            )}
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
                  placeholder="Phone Number"
                  inputStyle={styles.inputText}
                  caretColor={theme.colors.smoothRed}
                  placeholderTextColor={theme.colors.foggy}
                  focusedInputContainerStyle={styles.focusedInputContainerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <StyledText color={theme.colors.brightRed}>
                {errors.phone.message}
              </StyledText>
            )}
          </View>
          <Button
            label="Next"
            containerStyle={styles.buttonStyle}
            onPress={handleSubmit(onSubmit)}
            fullWidth
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 20,
  },
  buttonStyle: {
    width: '100%',
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

export default PersonalInformation;
