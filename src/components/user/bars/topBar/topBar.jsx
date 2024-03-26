import { View, Image } from "react-native";
import { styles } from './styles.jsx'
function TopBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('./icons/logo.png')}
                />
            </View>
            <View style={styles.line} />
        </View>

    )
}
export default TopBar