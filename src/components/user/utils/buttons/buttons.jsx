import { View, Image, TouchableOpacity } from 'react-native';
import { perfilStyles } from './style.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import { appGradientColors } from '../../../../styles.jsx'

function Buttons({ fast = false }) {
    return (
        <View style={perfilStyles[`buttons${fast ? 'Fast' : ''}`]}>
            <RestoreButton/>
            <IgnoreButton/>
            <LikeButton />
            <SuperLikeButton />
            <ShareButton />
        </View>
    );
}

function Button({ image}) {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            style={perfilStyles.button}
        >
            <Image
                style={perfilStyles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};

function LikeButton() {
    const image = require('./icons/like.png');
    return (
        <Button image={image}/>
    )
}

function SuperLikeButton() {
    const image = require('./icons/superLike.png');
    return (
        <Button image={image} />
    )
}

function IgnoreButton() {
    const image = require('./icons/block.png');
    return (
        <Button image={image} />
    )
}

function RestoreButton() {
    const image = require('./icons/restore.png');
    return (
        <Button image={image} />
    )
}

function ShareButton() {
    const image = require('./icons/share.png');
    return (
        <Button image={image} />
    )
}


export default Buttons