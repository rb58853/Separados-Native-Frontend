import { Text, View } from "react-native"
import { styles } from "./style"
import { Image } from 'react-native';

const myImage = require('../../../assets/icon.png');


function Test() {
    return (
        <View style={styles.test}>
            <Text>
                Probando Texto React Native con estilo
            </Text>
            <Image style={styles.image}
                source={myImage} />
        </View>
    )
}
export default Test