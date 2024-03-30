import { View, FlatList } from "react-native";
import users from "../../../data/users";
import React, { useEffect, useRef, useState } from "react";
import defaulStyles from "../../../styles";
import UserReel from "../../user/user-reel/userReel";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from "@react-navigation/native";
import env from "../../../environment/environment";

function SwitchUser(y, deltaY, setIndexUser, indexUser, usersLenght) {
    if (y > deltaY && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
    }
    if (y < deltaY && indexUser > 0) {
        setIndexUser(indexUser - 1)
    }
}

function Reels({ navigation }) {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('reels'))
        }, []))

    const usersView = []
    Object.values(users).forEach((user_, index) => {
        if (user_.nick != env['profile'])
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