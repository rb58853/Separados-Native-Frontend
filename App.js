import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Test from './src/components/test/Test';
import Constants from 'expo-constants';
import User from './src/components/user/user-perfil/user';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <User userKey={'user1'} />
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(15,15,15,1)',
    color: 'white',
    flex:1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
});
