import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/Auth/Signup';
import SignIn from '../screens/Auth/SignIn';
import OTPVerify from '../screens/Auth/OtpVerification';

export type AuthParamList = {
  SignUp: undefined;
  SignIn: undefined;
  OTPVerify: {email: string};
};

const Auth = createStackNavigator<AuthParamList>();

export type AuthNavigation = NavigationProp<AuthParamList>;

export type AuthRoute<T extends keyof AuthParamList> = RouteProp<
  AuthParamList,
  T
>;

const AuthRoutes = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
        component={SignUp}
      />
      <Auth.Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignIn}
      />
      <Auth.Screen
        name="OTPVerify"
        options={{
          headerShown: false,
        }}
        component={OTPVerify}
      />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
