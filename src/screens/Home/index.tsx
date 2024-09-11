import {Text, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';

const Home = () => {
  const nav = useNavigation<RootNavigation>();
  return (
    <Layout>
      <TouchableOpacity onPress={() => nav.navigate('Onboarding')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Home;
