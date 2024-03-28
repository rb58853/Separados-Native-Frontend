import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import User from './src/components/user/user-perfil/user';
import UserFast from './src/components/user/userFast/userFast.jsx';
import TopBar from './src/components/bars/topBar/topBar.jsx';
import DefaulHome from './src/components/home/default/home.jsx';
import BottomBar from './src/components/bars/bottomBar/bottomBar.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reels from './src/components/home/reels/reels.jsx';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/store/store.js';
import { setActive } from './src/store/bottomBar/bottomBarSlice.jsx';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <View style={styles.full}>
      <View style={styles.statusBar} />
      <Provider store={store}>
        <Content />
      </Provider>
    </View>
  );
}

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive(true));
  }, [dispatch]);

  return (
    <View style={styles.app}>
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
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="reels"
            component={Reels}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
        <BottomBar />
      </NavigationContainer>
    </View>
  )
}



// const stackScreenStyle = 
const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'rgba(15,15,20,1)',
  },
  statusBar:{
    height: Constants.statusBarHeight,
    backgroundColor:"green",
    backgroundColor: 'rgba(15,15,20,1)',
    zIndex:1000,
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
