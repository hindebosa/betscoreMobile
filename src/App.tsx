import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './utils/ThemeProvider';
import {theme} from './theme/theme';
import {AuthProvider} from './context/AuthContext';
import {KeyboardProvider} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {
  const onNavigationReady = useCallback(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <KeyboardProvider> */}
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
      {/* </KeyboardProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
