import { View, Image, Pressable } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from '../../../styles.jsx'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// const Tab = createBottomTabNavigator();

function BottomBar() {
    const bottomBarStore = useSelector((state) => (state.bottomBar))

    return (
        <View style={bottomBarStore.active ? styles.bottomBar : styles.hide}>
            <View style={styles.line} />
            <View style={styles.content}>
                <Buttons />
            </View>
        </View>
    )
}

function Buttons() {
    const navigation = useNavigation()
    // const bottomBarStore = useSelector((state)=>(state.bottomBar))

    return (
        <View style={styles.buttons}>
            <HomeButton navigation={navigation} />
            <SearchButton navigation={navigation} />
            <ReelsButton navigation={navigation} />
            <MessageButton navigation={navigation} />
            <ProfileButton navigation={navigation} />
        </View>
    )
}


function Button({ image, active, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        >
            <LinearGradient
                colors={active ? appGradientColors.standart : appGradientColors.white80}
                style={styles.buttonImageBack}
            >
                <Image
                    style={styles.buttonImage}
                    source={image}
                />
            </LinearGradient>
        </Pressable>
    )
};

function HomeButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))
    const onPress = () => {
        navigation.navigate('home')
    }
    const image = require('./icons/home.png');

    return <Button image={image} active={bottomBarStore.screen == 'home'} onPress={onPress} />
}

function MessageButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))
    const image = require('./icons/message.png');
    return <Button active={bottomBarStore.screen == 'message'} image={image} />
}

function ProfileButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))
    const image = require('./icons/profile.png');
    const onPress = () => {
        if (bottomBarStore.screen != 'profile')
            navigation.navigate('profile')
    }

    return <Button active={bottomBarStore.screen == 'profile'} image={image} onPress={onPress} />
}

function SearchButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))
    const image = require('./icons/search.png');

    return <Button active={bottomBarStore.screen == 'search'} image={image} />
}

function ReelsButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))
    const onPress = () => {
        navigation.navigate('reels');

    }
    const image = require('./icons/star.png');

    return <Button active={bottomBarStore.screen == 'reels'} image={image} onPress={onPress} />
}

export default BottomBar