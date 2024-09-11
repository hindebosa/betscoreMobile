import Layout from '../../components/Layout';
import * as React from 'react';
import {useCallback} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ProgressBar from 'react-native-progress-step-bar';
import AnimatedDotsCarousel from 'react-native-progress-step-bar';
import {theme} from '../../theme/theme';
import StyledText from '../../components/BText';
import {Input} from '../../components/Input';

const PersonalInformation = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handlePrevStep = useCallback(() => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  }, []);

  return (
    <Layout>
      <View>
        <View style={{marginBottom: 50}}>
          <ProgressBar
            steps={2}
            width={325}
            height={3}
            currentStep={currentStep}
            stepToStepAnimationDuration={1000}
            withDots={false}
            backgroundBarStyle={{
              backgroundColor: 'white',
            }}
            filledBarStyle={{
              backgroundColor: theme.colors.primary,
            }}
          />
        </View>
        <View style={{padding: 20}}>
          <StyledText>Personal Infomation</StyledText>
          <Input
            placeholder="First Name"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <Input
            placeholder="Surname"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <Input
            placeholder="ID Number"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
          <Input
            placeholder="Phone Number"
            inputStyle={styles.inputText}
            caretColor={theme.colors.smoothRed}
            placeholderTextColor={theme.colors.foggy}
            focusedInputContainerStyle={styles.focusedInputContainerStyle}
            containerStyle={styles.containerStyle}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 400,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            onPress={handleNextStep}
            style={{backgroundColor: 'green'}}>
            <Text>NextStep</Text>
          </TouchableOpacity>
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
