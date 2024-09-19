import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layout from '../../components/Layout';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';
import StyledText from '../../components/BText';
import {theme} from '../../theme/theme';
import {Input} from '../../components/Input';

import {Divider} from '@rneui/base';
import {Tab} from '@rneui/themed';
import React from 'react';
import LeagueTabView from './components/TabView';

const Home = () => {
  const nav = useNavigation<RootNavigation>();

  const [index, setIndex] = React.useState(0);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <Layout>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <StyledText
                size={22}
                weight="semiBold"
                color={theme.colors.primary}>
                Hie,
              </StyledText>
              <StyledText size={16} weight="semiBold" color="#ddd5d4">
                Hilton Kudyahakudadirwe
              </StyledText>
            </View>
            <StyledText
              size={15}
              color={theme.colors.primary}
              weight="semiBold">
              Balance: $12,00
            </StyledText>
          </View>
          <Divider style={{marginVertical: 10}} />

          <View style={{marginTop: 12}}>
            <Input
              placeholder="Search"
              inputStyle={styles.inputText}
              caretColor={theme.colors.smoothRed}
              placeholderTextColor={theme.colors.foggy}
              focusedInputContainerStyle={styles.focusedInputContainerStyle}
              containerStyle={styles.containerStyle}
            />
          </View>
          <StyledText size={20} weight="semiBold">
            Leagues
          </StyledText>
          <LeagueTabView />
        </View>
      </Layout>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 7,
    marginVertical: 10,
  },
  inputText: {
    color: '#000',
  },
  focusedInputContainerStyle: {
    borderColor: theme.colors.smoothRed,
    backgroundColor: '#fff',
  },
  leagueView: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#152121',
    padding: 10,
    borderRadius: 10,
  },
});

export default Home;
