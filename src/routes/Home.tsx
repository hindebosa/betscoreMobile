import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

export type HomeParamList = {
  Main: undefined;
  Dev: undefined;
};

const Homes = createStackNavigator<HomeParamList>();

export type HomeNavigation = NavigationProp<HomeParamList>;

export type HomeRoute<T extends keyof HomeParamList> = RouteProp<
  HomeParamList,
  T
>;

const HomeRoutes = () => {
  return (
    <Homes.Navigator>
      <Homes.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
    </Homes.Navigator>
  );
};

export default HomeRoutes;
