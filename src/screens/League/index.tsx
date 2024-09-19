import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';

const Leaague = () => {
  return <></>;
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
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 10,
  },
});
export default Leaague;
