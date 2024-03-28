import { View, Image, TouchableOpacity, Text, StatusBar } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from '../../../styles.jsx'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

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
        <TouchableOpacity
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
        </TouchableOpacity>
    )
};

function HomeButton({ navigation }) {
    const bottomBarStore = useSelector((state) => (state.bottomBar))

    const onPress = () => { navigation.navigate('home') }
    const image = require('./icons/home.png');
    return <Button image={image} active={bottomBarStore.screen == 'home'} onPress={onPress} />
}

function MessageButton({ navigation }) {
    const image = require('./icons/message.png');
    return <Button image={image} />
}

function ProfileButton({ navigation }) {
    const image = require('./icons/profile.png');
    return <Button image={image} />
}

function SearchButton({ navigation }) {
    const image = require('./icons/search.png');
    return <Button image={image} />
}

function ReelsButton({ navigation }) {
    const onPress = () => { navigation.navigate('reels') }

    const image = require('./icons/star.png');
    return <Button image={image} onPress={onPress} />
}

export default BottomBar