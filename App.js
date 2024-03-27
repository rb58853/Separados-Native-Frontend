import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Test from './src/components/test/Test';
import Constants from 'expo-constants';
import User from './src/components/user/user-perfil/user';
import UserFast from './src/components/user/userFast/userFast.jsx';
import TopBar from './src/components/bars/topBar/topBar.jsx';
import DefaulHome from './src/components/home/default/home.jsx';
import BottomBar from './src/components/bars/bottomBar/bottomBar.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.full}>
      <View style={styles.app}>
        {/* <TopBar /> */}
        {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="home"
              component={DefaulHome}
              options={{ header: (props) => <TopBar {...props} /> }}
            />

            <Stack.Screen
              name="user"
              component={User}
              options={{ header: (props) => <TopBar {...props} /> }}
            />

          </Stack.Navigator>
          {/* <DefaulHome/> */}
        </NavigationContainer>
        {/* </View > */}
        <BottomBar />
      </View>
    </View>
  );
}

// const stackScreenStyle = 
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
