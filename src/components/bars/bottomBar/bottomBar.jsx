import { View, Image, TouchableOpacity } from "react-native";
import { styles } from './styles.jsx'
import { LinearGradient } from "expo-linear-gradient";
import { appGradientColors } from '../../../styles.jsx'

function BottomBar() {
    return (
        <View style={styles.bottomBar}>
            <View style={styles.line} />
            <View style={styles.content}>
                <Buttons />
            </View>
        </View>

    )
}

function Buttons() {
    return (
        <View style={styles.buttons}>
            <HomeButton />
            <SearchButton />
            <ReelsButton />
            <MessageButton />
            <ProfileButton />
        </View>
    )
}


function Button({ image, active }) {
    return (
        <TouchableOpacity
            // onPress={onPress}
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

function HomeButton() {
    const image = require('./icons/home.png');
    return <Button image={image} active={true}/>
}

function MessageButton() {
    const image = require('./icons/message.png');
    return <Button image={image} />
}

function ProfileButton() {
    const image = require('./icons/profile.png');
    return <Button image={image} />
}

function SearchButton() {
    const image = require('./icons/search.png');
    return <Button image={image} />
}

function ReelsButton() {
    const image = require('./icons/star.png');
    return <Button image={image} />
}

export default BottomBar