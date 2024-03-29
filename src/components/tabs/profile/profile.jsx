import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import users from "../../../data/users"
import env from "../../../environment/environment"
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { setScreen } from '../../../store/bottomBar/bottomBarSlice';
import { styles } from './style';
import { AgeCaculate } from '../../user/utils/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { appGradientColors } from '../../../styles';

const profile = users[env['profile']]
function Profile() {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('profile'))
        }, []))

    const images = profile.images.map((path) => {
        // return <Text>{path}</Text>
        return <ShortImage path={path} />
    })

    return (
        <View style={styles.full}>
            <ScrollView style={styles.profile}>
                <View style={styles.rowProfile}>
                    <Image
                        style={styles.profilePhoto}
                        source={{ uri: env['usersImagesRoot'] + profile.profilePhoto }}
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

                <PersonalInfo />

                <View style={styles.boxSpace}>
                    <View style={styles.headerRow}>
                        <Text style={styles.myHeader2}>Intereses</Text>
                        <IconButton image={require('./icons/edit.png')} />
                    </View>
                    <Tags />
                </View>

                <View style={styles.boxSpace}>
                    <View style={styles.headerRow}>
                        <Text style={styles.myHeader2}>Sobre mi</Text>
                        <IconButton image={require('./icons/edit.png')} />
                    </View><Text style={styles.text}>
                        {`${profile.bibliografy}`}
                    </Text>
                </View>

                <View style={styles.boxSpace}>
                    <View style={styles.headerRow}>
                        <Text style={styles.myHeader2}>Mis fotos</Text>
                    </View>
                    <View style={styles.imagesSpace}>
                        {images}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

function ShortImage({ path }) {
    const fullPath = env['usersImagesRoot'] + path
    return (
        <TouchableOpacity style={styles.shortImage}>
            <Image style={styles.image}
                source={{ uri: fullPath }}
            />
        </TouchableOpacity>
    )

}

function Tags() {
    return <EditableTags />
}

function NormalTags() {
    const tags = profile.tags.map((tag) => {
        return <Text style={styles.tag}> {tag} </Text>
    })

    return <View style={styles.tagsSpace}>{tags}</View>
}

function EditableTags() {
    const tags = profile.tags.map((tag) => {
        return (
            <View style={styles.tag}>
                <Text style={styles.text}> {tag} </Text>
                <DeleteTagButton />
            </View>
        )
    })

    tags.push(
        <TouchableOpacity>
            <LinearGradient
                colors={appGradientColors.green}
                style={styles.newTag}
            >

                <Image
                    style={styles.plusImage}
                    source={require('./icons/plus.png')}
                />
            </LinearGradient>
        </TouchableOpacity>
    )

    return <View style={styles.tagsSpace}>{tags}</View>
}

function PersonalInfo() {
    return (
        <View style={styles.boxSpace}>
            <View style={styles.headerRow}>
                <Text style={styles.myHeader2}>Informacion Personal</Text>
                <IconButton image={require('./icons/edit.png')} />
            </View>

            <Text style={styles.text}>{`${profile.genre == 'male' ? "♂️" : '♀️'} ${profile.name} ${profile.last_name}`}</Text>
            <Text style={styles.text}>{`📐${profile.height} cm | ${profile.weight} kg`}</Text>
            <Text style={styles.text}>{`🏠 ${profile.city}, ${profile.municipe}`}</Text>
            <Text style={styles.text}>{`💜 ${profile.sexual_orientation}`}</Text>
            <Text style={styles.text}>{`🏢 Unversidad de la Habana`}</Text>
            <Text style={styles.text}>{`👨‍🎓 Ingeniera de sofware`}</Text>
        </View>
    )

}

function IconButton({ image }) {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            style={styles.headerIcon}
        >
            <Image
                style={styles.image}
                source={image}
            />
        </TouchableOpacity>
    )
};
function DeleteTagButton() {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            style={styles.deleteIcon}
        >
            <Image
                style={styles.image}
                source={require('./icons/delete.png')}
            />
        </TouchableOpacity>
    )
};

export default Profile