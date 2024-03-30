import User from '../../components/user/user-perfil/user';
import TopBar, { ProfileTopBar } from '../../components/bars/topBar/topBar.jsx';
import DefaulHome from '../tabs/home/home.jsx';
import BottomBar from '../../components/bars/bottomBar/bottomBar.jsx';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reels from '../tabs/reels/reels.jsx';
import { useDispatch } from 'react-redux';
import { setActive } from '../../store/bottomBar/bottomBarSlice.jsx';
import { useEffect } from 'react';
import Profile from '../tabs/profile/profile/profile.jsx';
import ProfileStats from '../tabs/profile/profileStats/profileStats.jsx';
import Favorites from '../tabs/profile/favorites/favorites.jsx';


const Stack = createNativeStackNavigator();

function NavigationContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActive(true));
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
            >
                <Stack.Screen
                    name="home"
                    component={DefaulHome}
                    options={{
                        header: (props) => <TopBar {...props} />,
                        headerShown: 'float',
                    }}
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

                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        header: (props) => <ProfileTopBar {...props} />,
                        headerShown: 'float',
                    }}
                />

                <Stack.Screen
                    name="profileStats"
                    component={ProfileStats}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="favorites"
                    component={Favorites}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
            <BottomBar />
        </NavigationContainer>
    )
}
export default NavigationContent