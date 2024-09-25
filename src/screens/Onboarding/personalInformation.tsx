import Layout from '../../components/Layout';
import * as React from 'react';
import {useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ProgressBar from 'react-native-progress-step-bar';
import {theme} from '../../theme/theme';
import StyledText from '../../components/BText';
import InputText from '../../components/Input';

const PersonalInformation = () => {
  return (
    <Layout>
      <View>
        <View style={{padding: 20}}>
          <StyledText>Personal Infomation</StyledText>
          <InputText
            placeholder="First Name"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <InputText
            placeholder="Surname"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <InputText
            placeholder="ID Number"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <InputText
            placeholder="Phone Number"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
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

export default PersonalInformation;
