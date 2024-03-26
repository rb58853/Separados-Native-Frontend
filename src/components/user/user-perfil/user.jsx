import users from '../../../data/users';
import perfil from '../../../data/perfil';
import { AgeCaculate } from '../utils/utils';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import Buttons from '../utils/buttons/buttons.jsx';
import Images from '../utils/imagesComponent/images.jsx';


function ExitButton() {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            style={styles.exitButton}
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
        if (users[perfil.key].tags.includes(tag)) {
            tags.push(
                <Text style={styles.tagActive}>
                    {tag}
                </Text>
            )
        }
    })
    user.tags.forEach((tag) => {
        if (!users[perfil.key].tags.includes(tag)) {
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

function User({ userKey }) {
    const user = users[userKey];

    return (
        <View style={styles.user}>
            <View style={styles.line} />
            <ExitButton />
            <ScrollView style={styles.scrollView}>
                <View style = {styles.boxImageHeader}>
                    <Text style={styles.myHeader1}>{`${user.name}, ${AgeCaculate(user)}`}</Text>
                    <Images user={user} />
                </View>
                <Info user={user} />
                <View style={styles.spaceToButtons} />
            </ScrollView>
            <Buttons />
        </View >
    )
}
export default User