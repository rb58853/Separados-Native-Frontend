import users from '../../../data/users.js';
import { AgeCaculate } from '../utils/utils.jsx';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style.jsx';
import Buttons from '../utils/buttons/buttons.jsx';
import Images from '../utils/imagesComponent/images.jsx';

function UserFast({ userKey, navigation }) {
    const user = users[userKey];

    return (
        <View style={styles.user}>
            <Images user={user} mode={'fast'} navigation = {navigation} />
            <View style={styles.line} />
        </View >
    )
}
export default UserFast

