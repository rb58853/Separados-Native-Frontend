import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/store/store.js';
import NavigationContent from './src/components/navigation/navigationComponent.jsx';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <View style={styles.full}>
      <View style={styles.statusBar} />
      <Provider store={store}>
        <View style={styles.app}>
          <NavigationContent />
        </View>
      </Provider>
    </View>
  );
}

// const stackScreenStyle = 
const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'rgba(15,15,20,1)',
  },
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "green",
    backgroundColor: 'rgba(15,15,20,1)',
    zIndex: 1000,
  },
  app: {
    color: 'white',
    // backgroundColor:"green",
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
