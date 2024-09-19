import {Tab, TabView} from '@rneui/themed';
import React from 'react';
import {theme} from '../../../theme/theme';
import PremierLeague from '../../../assets/icons/premier-league.svg';
import Uefa from '../../../assets/icons/uefa-champions-league-1.svg';
import {StyleSheet, View} from 'react-native';
import StyledText from '../../../components/BText';
import {Image} from 'react-native';

const LeagueTabView = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: theme.colors.primary,
          height: 3,
        }}
        containerStyle={{backgroundColor: theme.colors.background}}
        variant="primary">
        <Tab.Item title="Upcoming Events" titleStyle={{fontSize: 12}} />
        <Tab.Item title="Live Events" titleStyle={{fontSize: 12}} />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'red', width: '95%'}}>
          <View>
            <View style={styles.leagueView}>
              <PremierLeague />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#d3770f">
                Premier League
              </StyledText>
            </View>
            <View style={styles.leagueView}>
              <Image
                style={{width: 35, height: 40}}
                source={require('../../../assets/icons/uefa.png')}
              />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#d3770f">
                UEFA
              </StyledText>
            </View>
            <View style={styles.leagueView}>
              <Image
                style={{width: 35, height: 35}}
                source={require('../../../assets/icons/laliga.png')}
              />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#d3770f">
                La Liga
              </StyledText>
            </View>
            <View style={styles.leagueView}>
              <Image
                style={{width: 35, height: 40}}
                source={require('../../../assets/icons/pngegg.png')}
              />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#d3770f">
                Bundesliga
              </StyledText>
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <View>
            <View style={styles.leagueView}>
              <PremierLeague />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#ddd5d4">
                Premier League
              </StyledText>
            </View>
            <View style={styles.leagueView}>
              <PremierLeague />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#ddd5d4">
                Premier League
              </StyledText>
            </View>
            <View style={styles.leagueView}>
              <PremierLeague />
              <StyledText
                weight="semiBold"
                size={15}
                style={{marginLeft: 10, marginTop: 10}}
                color="#d3770f">
                Premier League
              </StyledText>
            </View>
          </View>
        </TabView.Item>
      </TabView>
    </>
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
    height: 50,
  },
});

export default LeagueTabView;
