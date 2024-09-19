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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TicketScreeen from '../screens/Ticket';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../theme/theme';
import BetHistory from '../screens/BetHistory';
import Profile from '../screens/Profile';

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

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Host>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        initialRouteName="Home">
        <Root.Screen name="Onboarding" component={OnboardingRoutes} />
        <Root.Screen name="Auth" component={AuthRoutes} />
        <Root.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    </Host>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.black,
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.background}
              style={{marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreeen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="ticket"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.background}
              style={{marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BetHistory"
        component={BetHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="institution"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.background}
              style={{marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.background}
              style={{marginTop: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
