import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {Host} from 'react-native-portalize';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeRoutes from './Home';
import OnboardingRoutes, {OnboardingParamList} from './Onboarding';
import AuthRoutes, {AuthParamList} from './Auth';

export type RootParamList = {
  Home: undefined;
  Onboarding: NavigatorScreenParams<OnboardingParamList>;
  Auth: NavigatorScreenParams<AuthParamList>;
};

const Root = createStackNavigator<RootParamList>();

export type RootNavigation = NavigationProp<RootParamList>;

export type RootRoute<T extends keyof RootParamList> = RouteProp<
  RootParamList,
  T
>;

export const Routes = () => {
  return (
    <Host>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <Root.Screen name="Home" component={HomeRoutes} />
        <Root.Screen name="Onboarding" component={OnboardingRoutes} />
        <Root.Screen name="Auth" component={AuthRoutes} />
      </Root.Navigator>
    </Host>
  );
};
