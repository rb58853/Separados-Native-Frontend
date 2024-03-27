import { View, Image } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from "../../../styles.jsx";

function TopBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.content}>
                <LinearGradient
                    style={styles.logo}
                    colors={appGradientColors.white}
                >
                    <Image
                        style={styles.image}
                        source={require('./icons/logo.png')}
                    />
                </LinearGradient>
                
                <View style = {styles.buttons}>
                    <View style= {styles.button}>
                        
                    </View>

                    <View style= {styles.button}>
                        
                    </View>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}
export default TopBar