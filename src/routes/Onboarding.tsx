import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingPage from '../screens/Onboarding';
import PersonalInformation from '../screens/Onboarding/personalInformation';

export type OnboardingParamList = {
  Onboarding: undefined;
  PersonalInfomation: undefined;
};

const Onboarding = createStackNavigator<OnboardingParamList>();

export type OnboardingNavigation = NavigationProp<OnboardingParamList>;

export type HomeRoute<T extends keyof OnboardingParamList> = RouteProp<
  OnboardingParamList,
  T
>;

const OnboardingRoutes = () => {
  return (
    <Onboarding.Navigator>
      <Onboarding.Screen
        name="Onboarding"
        options={{
          headerShown: false,
        }}
        component={OnboardingPage}
      />
      <Onboarding.Screen
        name="PersonalInfomation"
        options={{
          headerShown: false,
        }}
        component={PersonalInformation}
      />
    </Onboarding.Navigator>
  );
};

export default OnboardingRoutes;
