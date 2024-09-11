import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './utils/ThemeProvider';
import {theme} from './theme/theme';

function App(): React.JSX.Element {
  const onNavigationReady = useCallback(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
