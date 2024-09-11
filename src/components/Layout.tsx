import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default Layout;
