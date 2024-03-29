import { Text, View, Image,ScrollView  } from 'react-native';
import users from "../../../data/users"
import env from "../../../environment/environment"
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { setScreen } from '../../../store/bottomBar/bottomBarSlice';
import { styles } from './style';
import { AgeCaculate } from '../../user/utils/utils';

const profile = users[env['profile']]
function Profile() {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('profile'))
        }, []))

    const images = []

    return (
        <View style={styles.full}>
            <ScrollView style={styles.profile}>
                <View style={styles.rowProfile}>
                    <Image
                        style={styles.profilePhoto}
                    />
                    <View style={styles.nameSpace}>
                        <Text style={styles.profileName}>
                            {`${profile.name} ${profile.last_name}, ${AgeCaculate(profile)}`}
                        </Text>
                        <Text style={{ color: 'white' }}>
                            {`${profile.short_bibliografy}`}
                        </Text>
                    </View>
                </View>
                {/* <View style={styles.line} /> */}

                <View style={styles.boxSpace}>
                    <Text style={styles.myHeader2}>Sobre mi</Text>
                    <Text style={styles.text}>
                        {`${profile.bibliografy}`}
                    </Text>
                </View>

                <View style={styles.boxSpace}>
                    <Text style={styles.myHeader2}>Mis fotos</Text>
                </View>
            </ScrollView>
        </View>
    )
}

function ShortImage({ image }) {
    // return (

    // )

}

export default Profile