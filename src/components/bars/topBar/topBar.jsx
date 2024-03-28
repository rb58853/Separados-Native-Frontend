import { View, Image, Pressable } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from "../../../styles.jsx";

function Button({ image, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        >
            <Image
                style={styles.buttonImage}
                source={image}
            />
        </Pressable>
    )
};

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
                    <Button image={require('./icons/menu.png')}/>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}
export default TopBar