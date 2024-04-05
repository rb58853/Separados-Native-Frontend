import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import users from "../../../../data/users"
import env from "../../../../environment/environment"
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { setActive, setScreen } from '../../../../store/bottomBar/bottomBarSlice';
import { styles } from './style';
import { AgeCaculate } from '../../../user/utils/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { appGradientColors } from '../../../../styles';
import { GetUserInformationById } from '../../../../api/information';
import { GetProfile, SetProfile, SetProfileOnFocus } from '../../../../store/profile/functions';
import { SetUsers } from '../../../../store/users/functions';


function Profile() {
    SetProfileOnFocus(GetUserInformationById(env.profile))

    const dispatch = useDispatch()
    let profile = useSelector((state) => (state.profile))

    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('profile'))
            dispatch(setActive(true))
        }, []))

    const images = ShortImagesList(profile)

    return (
        <View style={styles.full}>
            <Text style={{ color: 'white' }}>
                {profile['profilePhoto']}
            </Text>
            <ScrollView style={styles.profile}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.rowProfile}>
                    <Image
                        style={styles.profilePhoto}
                        source={{ uri: env['usersImagesRoot'] + profile.profilePhoto }}
                    />
                    <View style={styles.nameSpace}>
                        <Text style={styles.profileName}>
                            {`${profile.name} ${profile.lastName}, ${AgeCaculate(profile)}`}
                        </Text>
                        <Text style={{ color: 'white' }}>
                            {`${profile.shortBibliografy}`}
                        </Text>
                    </View>

                    <SeeButton profile={profile} />
                </View>

                {/* <View style={styles.line} /> */}

                <PersonalInfo user={profile} />

                <View style={styles.boxSpace}>
                    <View style={styles.headerRow}>
                        <Text style={styles.myHeader2}>Intereses</Text>
                        <IconButton image={require('./icons/edit.png')} />
                    </View>
                    <Tags profile={profile} />
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

function ShortImagesList(profile) {
    const images = profile.images.map((path) => {
        // return <Text>{path}</Text>
        return <ShortImage path={path} />
    })
    images.push(
        <TouchableOpacity style={styles.addImage}>
            <Image style={styles.addImageImage}
                source={require('./icons/addImage.png')}
            />
        </TouchableOpacity>

    )

    return images
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

function Tags({ profile }) {
    return <NormalTags profile={profile} />
}

function NormalTags({ profile }) {
    const tags = profile.tags.map((tag) => {
        return <Text style={styles.tag}> {tag} </Text>
    })

    return <View style={styles.tagsSpace}>{tags}</View>
}

function EditableTags({ profile }) {
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

function PersonalInfo({ user }) {
    return (
        <View style={styles.boxSpace}>
            <View style={styles.headerRow}>
                <Text style={styles.myHeader2}>Informacion Personal</Text>
                <IconButton image={require('./icons/edit.png')} />
            </View>

            <Text style={styles.text}>{`${user.genre == 'male' ? "♂️" : '♀️'} ${user.name} ${user.last_name}`}</Text>
            <Text style={styles.text}>{`📐${user.height} cm | ${user.weight} kg`}</Text>
            <Text style={styles.text}>{`🏠 ${user.city}, ${user.municipe}`}</Text>
            <Text style={styles.text}>{`💜 ${user.sexualOrientation}`}</Text>
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
function SeeButton({ profile }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('user',
                    {
                        userKey: profile.id,
                        activeButtons: false,
                    }
                );
            }}
            style={{ height: 40, aspectRatio: 1 / 1, marginLeft: 'auto' }}
        >
            <Image
                style={styles.image}
                source={require('./icons/see.png')}
            />
        </TouchableOpacity>
    )
}

export default Profile