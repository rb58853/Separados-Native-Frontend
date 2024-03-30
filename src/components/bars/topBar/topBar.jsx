import { View, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from "../../../styles.jsx";
import { useNavigation } from "@react-navigation/native";

function TopBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.content}>
                <LinearGradient
                    style={styles.logo}
                    colors={appGradientColors.standart}
                >
                    <Image
                        style={styles.image}
                        source={require('./icons/logo.png')}
                    />
                </LinearGradient>

                <View style={styles.buttons}>
                    <Button image={require('./icons/notification.png')} />
                    <Button image={require('./icons/adjusts.png')} />
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export function CustomTopBar({ buttons }) {
    return (
        <View style={styles.topBar}>
            <View style={styles.content}>
                <LinearGradient
                    style={styles.logo}
                    colors={appGradientColors.standart}
                >
                    <Image
                        style={styles.image}
                        source={require('./icons/logo.png')}
                    />
                </LinearGradient>

                <View style={styles.buttons}>
                    {buttons} 
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}

export function ProfileTopBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.content}>
                <LinearGradient
                    style={styles.logo}
                    colors={appGradientColors.standart}
                >
                    <Image
                        style={styles.image}
                        source={require('./icons/logo.png')}
                    />
                </LinearGradient>

                <View style={styles.buttons}>
                    <FavoritesButton />
                    <ProfileStatsButton />
                    <Button image={require('./icons/notification.png')} />
                    <Button image={require('./icons/adjusts.png')} />
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}

function Button({ image, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Image
                style={styles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};

export function TopBarButton({ image, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Image
                style={styles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};

function ProfileStatsButton() {
    const navigation = useNavigation()
    const onPress = () => { navigation.navigate('profileStats') }
    return <Button image={require('./icons/likes.png')} onPress={onPress} />
}

function FavoritesButton() {
    const navigation = useNavigation()
    const onPress = () => { navigation.navigate('favorites') }
    return <Button image={require('./icons/favorites.png')} onPress={onPress} />
}
export default TopBar