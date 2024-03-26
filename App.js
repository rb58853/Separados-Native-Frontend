import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Test from './src/components/test/Test';
import Constants from 'expo-constants';
import User from './src/components/user/user-perfil/user';
import UserFast from './src/components/user/userFast/userFast.jsx';
import TopBar from './src/components/user/bars/topBar/topBar.jsx';
import DefaulHome from './src/components/home/default/home.jsx';

export default function App() {
  return (
    <View style={styles.full}>
      <View style={styles.app}>
        <TopBar />
        <View style={styles.container}>
          {/* <UserFast userKey={'clara'} /> */}
          <DefaulHome/>
        </View >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'rgba(15,15,20,1)',
  },
  app: {
    marginTop: Constants.statusBarHeight,
    color: 'white',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
