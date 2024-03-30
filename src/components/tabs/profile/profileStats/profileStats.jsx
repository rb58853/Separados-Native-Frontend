import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import env from "../../../../environment/environment"
import dynamicUsers from "../../../../data/usersRealTime"
import users from "../../../../data/users"
import { useNavigation } from "@react-navigation/native"

const profile = users[env['profile']]

function ProfileStats() {
    return (
        <View style={styles.full}>
            <ScrollView style={styles.profileStats}>
                <SuperLikesTo />
                <LikesTo />
                <BlocksTo />
            </ScrollView>
        </View>
    )
}

function BoxUsers({ userList, style, headerText }) {
    return (
        <View style={style}>
            <Text style={styles.myHeader2}>{headerText}</Text>
            <View style={styles.boxContainer}>
                {userList}
            </View>
        </View>
    )
}

function SuperLikesTo() {
    const superLikesTo = dynamicUsers[env['profile']].superLikesTo.map((id) => {
        return <ToUserButton user={users[id]} />
    })
    return <BoxUsers userList={superLikesTo} style={styles.superLikesBox} headerText={'Mis super likes'} />
}

function LikesTo() {
    const likesTo = dynamicUsers[env['profile']].likesTo.map((id) => {
        return <ToUserButton user={users[id]} />
    })
    return <BoxUsers userList={likesTo} style={styles.likesBox} headerText={'Mis likes'} />
}

function BlocksTo() {
    const blocksTo = dynamicUsers[env['profile']].blocksTo.map((id) => {
        return <ToUserButton user={users[id]} />
    })
    return <BoxUsers userList={blocksTo} style={styles.blocksBox} headerText={'Mis Bloqueados'} />
}

function ToUserButton({ user }) {
    const photoPath = env['usersImagesRoot'] + user.profilePhoto;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.toUserButton}
            onPress={() => {
                navigation.navigate('user',
                    {
                        userKey: user.nick,
                        activeButtons: true,
                    }
                );
            }}
        >
            <Image
                style={styles.fullImage}
                source={{ uri: photoPath }} />
        </TouchableOpacity>
    )
}
export default ProfileStats