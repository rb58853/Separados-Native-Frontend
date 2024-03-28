import { View, Text, FlatList } from "react-native";
import users from "../../../data/users";
import { useEffect, useRef, useState } from "react";
import perfil from "../../../data/perfil";
import BottomBar from "../../bars/bottomBar/bottomBar";
import defaulStyles from "../../../styles";
import UserReel from "../../user/user-reel/userReel";

function SwitchUser(y, deltaY, setIndexUser, indexUser, usersLenght) {
    if (y > deltaY && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
    }
    if (y < deltaY && indexUser>0) {
        setIndexUser(indexUser - 1)
    }
}

function Reels({ navigation }) {
    const usersView = []
    Object.values(users).forEach((user_, index) => {
        if (user_.nick != 'my_user')
            usersView.push({ id: index, user: user_.nick })
    })

    const renderItem = ({ item }) => (
        <UserReel navigation={navigation} userKey={item.user} />
    );

    const [indexUser, setIndexUser] = useState(0)
    const [deltaY, setDeltaY] = useState(0)

    const ref = useRef()
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollToIndex({ index: indexUser, animated: true });
        }
    }, [indexUser]);

    return (
        <View style={defaulStyles.container}>
            <FlatList
                ref={ref}
                data={usersView}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={{ backgroundColor: 'rgba(15,15,20,1)' }}
                contentContainerStyle={{ gap: 3 }}
                // showsHorizontalScrollIndicator={false}

                onScrollBeginDrag={(e) => { setDeltaY(e.nativeEvent.contentOffset.y) }}
                onScrollEndDrag={(e) => {
                    SwitchUser(e.nativeEvent.contentOffset.y, deltaY, setIndexUser, indexUser, usersView.length)
                }}
            />
        </View>
    )
}
export default Reels