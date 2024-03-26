import { View, Image, TouchableOpacity } from "react-native";
import { styles } from './styles.jsx'

function Button({ image }) {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            // onPress={onPress}
            style={styles.button}
        >
            <Image
                style={styles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};
function Buttons() {
    return (
        <View style={styles.buttons}>
            <Button image={require('./icons/home.png')} />
            <Button image={require('./icons/home.png')} />
            <Button image={require('./icons/home.png')} />
            <Button image={require('./icons/home.png')} />
            <Button image={require('./icons/home.png')} />
        </View>
    )
}


function BottomBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.line} />
            <View style={styles.content}>
                <Buttons />
            </View>
        </View>

    )
}
export default BottomBar