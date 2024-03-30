import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import env from "../../../../environment/environment"
import dynamicUsers from "../../../../data/usersRealTime"
import users from "../../../../data/users"
import { useNavigation } from "@react-navigation/native"
import TopBar, { CustomTopBar, TopBarButton } from "../../../bars/topBar/topBar"
import { LinearGradient } from "expo-linear-gradient"
import { appGradientColors } from "../../../../styles"

const profile = users[env['profile']]

function Favorites() {
    return (
        <View style={styles.full}>
            <Bar />
            <View style={styles.profileStats}>
                <ExitButton />
                <SimpleView />
            </View>
        </View>
    )
}
function Bar() {
    const buttons = [<ExpandButton />]

    return <CustomTopBar buttons={buttons} />
}

function SimpleView() {
    return (
        <ScrollView style={styles.scrollView}>
            <FavoritesList />
        </ScrollView>
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

function FavoritesList() {
    const favorites = dynamicUsers[env['profile']].favorites.map((id) => {
        return <ToUserButton user={users[id]} />
    })
    return <BoxUsers userList={favorites} style={styles.favoritesBox} headerText={'Favoritos'} />
}

function ToUserButton({ user }) {
    const photoPath = env['usersImagesRoot'] + user.images[0];
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

function ExpandButton() {
    const image = require('./icons/expand.png')
    const onPress = () => { }
    return <TopBarButton image={image} onPress={onPress} />
}
function BackButton() {
    const image = require('./icons/back.png')
    const onPress = () => { }
    return <TopBarButton image={image} onPress={onPress} />
}

function ExitButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            style={styles.exitButton}
        >
            <LinearGradient
                style={styles.exitButtonBackground}
                colors={appGradientColors.standart}
            >
                <Image
                    style={styles.exitButtonImage}
                    source={require('./icons/back.png')}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Favorites