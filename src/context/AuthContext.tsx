import {useNavigation} from '@react-navigation/native';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import {RootNavigation} from '../routes';
import {supabase} from '../libs/superbase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageKeys} from '../utils/storage';
import * as Sentry from '@sentry/react-native';

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  OTPVerify: (pin: string, email: string) => Promise<void>;
  updateUser: (
    fullName: string,
    phone: string,
    username: string,
    idNumber: string,
  ) => Promise<void>;
}

interface User {
  email?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const nav = useNavigation<RootNavigation>();

  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {};

  const OTPVerify = async (pin: string, email: string) => {
    try {
      const {
        data: {session},
        error,
      } = await supabase.auth.verifyOtp({
        email,
        token: pin,
        type: 'email',
      });
      if (session) {
        Sentry.setContext('auth', {
          accessToken: session.access_token,
          refreshToken: session.refresh_token,
        });

        setAccessToken(session.access_token);
        setRefreshToken(session.refresh_token);
        setUser({email: session.user.email});
        setIsAuthenticated(true);
        await AsyncStorage.setItem(
          storageKeys.accessToken,
          session.access_token,
        );
        await AsyncStorage.setItem(
          storageKeys.refreshToken,
          session.refresh_token,
        );
        nav.navigate('Onboarding', {screen: 'PersonalInfomation'});
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
    }
  };

  const updateUser = async (
    fullName: string,
    userName: string,
    phone: string,
    idNumber: string,
  ) => {
    try {
      const {data, error} = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          username: userName,
          id_number: idNumber,
          phone: phone,
        })
        .eq('id', '8a75df6c-b6a0-4025-8bd1-0fc3ef0861cb')
        .select();

      if (data) {
        nav.navigate('Home');
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {}
  };

  const signup = async (email: string, password: string) => {
    nav.navigate('Onboarding', {screen: 'PersonalInfomation'});
    // const {error, data: result} = await supabase.auth.signUp({
    //   email: email,
    //   password: password,
    // });

    // if (result) {
    //   nav.navigate('Auth', {screen: 'OTPVerify', params: {email: email}});
    //   setUser({email});
    // }
    // if (error) {
    //   console.log(error);
  };

  const logout = () => {
    // Implement your logout logic here
    // For example, clear any stored tokens
    // setUser(null);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const storageAccessToken = await AsyncStorage.getItem('access_token');
        const storageRefreshToken = await AsyncStorage.getItem(
          storageKeys.refreshToken,
        );
        setLoading(false);
        if (!storageAccessToken || !storageRefreshToken) return;
        Sentry.setContext('auth', {
          accessToken: storageAccessToken,
          refreshToken: storageRefreshToken,
        });
        setAccessToken(storageAccessToken);
        setRefreshToken(storageRefreshToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        Sentry.captureException(error);
      }
    };
    init();
  }, []);

  const value = {
    user,
    login,
    signup,
    logout,
    OTPVerify,
    accessToken,
    isAuthenticated,
    loading,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
