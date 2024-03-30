import React from 'react';
import users from '../../../data/users';
import { AgeCaculate } from '../utils/utils';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import Buttons from '../utils/buttons/buttons.jsx';
import Images from '../utils/imagesComponent/images.jsx';
import defaulStyles from '../../../styles.jsx';
import { appGradientColors } from '../../../styles.jsx'
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { setActive } from '../../../store/bottomBar/bottomBarSlice.jsx';
import env from '../../../environment/environment.js';

function ExitButton({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            style={[styles.exitButton, styles.boxShadow]}
        >
            <Image
                style={styles.exitButtonImage}
                source={require('./icons/back.png')}
            />
        </TouchableOpacity>
    )
}

function Tags({ user }) {
    const tags = []
    user.tags.forEach((tag) => {
        if (users[env['profile']].tags.includes(tag)) {
            tags.push(
                <LinearGradient
                    colors={appGradientColors.standart}
                    style={styles.tagActive}
                >
                    <Text style={styles.text}>
                        {tag}
                    </Text>
                </LinearGradient>
            )
        }
    })
    user.tags.forEach((tag) => {
        if (!users[env['profile']].tags.includes(tag)) {
            {
                tags.push(
                    <Text style={styles.tag}>
                        {tag}
                    </Text>
                )
            }
        }
    })

    return (
        <View style={styles.tagsSpace}>
            {tags}
        </View>
    )
}

function Info({ user }) {
    return (<View>
        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Informacion</Text>
            <Text style={styles.text}>{`${user.genre == 'male' ? "♂️" : '♀️'} ${user.name} ${user.last_name}`}</Text>
            <Text style={styles.text}>{`📐${user.height} cm | ${user.weight} kg`}</Text>
            <Text style={styles.text}>{`🏠 ${user.city}, ${user.municipe}`}</Text>
            <Text style={styles.text}>{`💜 ${user.sexual_orientation}`}</Text>
            <Text style={styles.text}>{`🏢 Unversidad de la Habana`}</Text>
            <Text style={styles.text}>{`👨‍🎓 Ingeniera de sofware`}</Text>
        </View>

        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Intereses</Text>
            <Tags user={user} />
        </View>
        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Sobre mi</Text>
            <Text style={styles.text}>
                {user.bibliografy}
            </Text>
        </View >
    </View>
    )

}

function User({ route, navigation }) {
    const { userKey, activeButtons } = route.params
    const user = users[userKey];

    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setActive(false))
            return () => {
                dispatch(setActive(true))
            };
        }, [])
    );

    return (
        <View style={defaulStyles.container}>
            <View style={styles.user}>
                {/* <Text style={{ color: 'black', fontSize: 25 }}> {userKey}</Text> */}
                <View style={styles.line} />
                <ExitButton navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.boxImageHeader}>
                        <Text style={styles.myHeader1}>{`${user.name}, ${AgeCaculate(user)}`}</Text>
                        <Images user={user} />
                    </View>
                    <Info user={user} />
                    {activeButtons && <View style={styles.spaceToButtons} />}
                </ScrollView>
                {activeButtons && <Buttons fast={false} />}
            </View >
        </View>
    )
}
export default User