import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingPage from '../screens/Onboarding';
import PersonalInformation from '../screens/Onboarding/personalInformation';

export type LeaugeParamList = {
  Onboarding: undefined;
  PersonalInfomation: undefined;
};

const Onboarding = createStackNavigator<LeaugeParamList>();

export type LeagueNavigation = NavigationProp<LeaugeParamList>;

export type LeagueRoute<T extends keyof LeaugeParamList> = RouteProp<
  LeaugeParamList,
  T
>;

const LeagueRoutes = () => {
  return (
    <Onboarding.Navigator>
      <Onboarding.Screen
        name="Onboarding"
        options={{
          headerShown: false,
        }}
        component={OnboardingPage}
      />
    </Onboarding.Navigator>
  );
};

export default LeagueRoutes;
