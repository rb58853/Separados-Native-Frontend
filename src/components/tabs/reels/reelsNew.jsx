import { View, FlatList, Text } from "react-native";
import users from "../../../data/users";
import React, { useEffect, useRef, useState } from "react";
import defaulStyles from "../../../styles";
import UserReel from "../../user/user-reel/userReel";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from "@react-navigation/native";
import env from "../../../environment/environment";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";




function ReelsNew({ navigation }) {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('reels'))
        }, []))

    const usersView = []
    Object.values(users).forEach((user, index) => {
        if (user.nick != env['profile'])
            usersView.push(<UserReel navigation={navigation} userKey={user.nick} />)
    })

    return (
        <View style={{ position: 'relative' }}>
            <PrincipalUser usersView={usersView} />
        </View>
    )
}

const heightSpace = 200;

function PrincipalUser({ usersView }) {
    const [indexUser, setIndexUser] = useState(0)
    const [deltaY, setDeltaY] = useState(0)
    const [scrollPositionY, setScrollPositionY] = useState(0)

    //Alternate follow value for each scrolling
    const [wasScroll, setWasScroll] = useState(false)
    const [opacity, setOpacity] = useState(1)
    const [indexView, setIndexView] = useState(usersView[indexUser])

    const ref = useRef();

    useEffect(() => {
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: false })
    }, [])


    useEffect(() => {
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: true })
    }, [wasScroll])

    return (
        <View>
            <ScrollView
                ref={ref}
                style={{ backgroundColor: 'rgba(15,15,20,1)' }}
                onScrollBeginDrag={(e) => { setDeltaY(e.nativeEvent.contentOffset.y) }}

                onMomentumScrollEnd={(e) => {
                    setWasScroll(!wasScroll)
                    SwitchUser(e.nativeEvent.contentOffset.y, deltaY, setIndexUser, indexUser, usersView.length, ref, setIndexView, usersView)
                }}
                onScroll={(e) => {
                    onScrollHandler(e.nativeEvent.contentOffset.y, setOpacity, heightSpace)
                    setScrollPositionY(e.nativeEvent.contentOffset.y)
                }}
            >

                <View style={[{ zIndex: 0, position: 'absolute', top: 0 }, scrollPositionY >= 200 ? { display: 'none' } : {}]}>
                    {indexUser > 0 && usersView[indexUser - 1]}
                </View>

                <View style={{ opacity: opacity, zIndex: 2 }}>
                    <View style={{ height: heightSpace }} />
                    {indexView}
                    <View style={{ height: heightSpace }} />
                </View>

                <View style={[{ zIndex: 0, position: 'absolute', bottom: 0 }, scrollPositionY <= 200 ? { display: 'none' } : {}]}>
                    {indexUser < 5 && usersView[indexUser + 1]}
                </View>
            </ScrollView>
        </View>
    )
}
function SwitchUser(y, deltaY, setIndexUser, indexUser, usersLenght, ref, setIndexView, usersView) {

    if ((y - 200) >= 150 && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
        setIndexView(usersView[indexUser + 1])
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: false })
    }
    if ((y - 200) <= -150 && indexUser > 0) {
        setIndexUser(indexUser - 1)
        setIndexView(usersView[indexUser - 1])
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: false })
    }
}
function onScrollHandler(y, setOpacity, center) {
    setOpacity((center - Math.abs(y - center) + 0) / (200))
}
export default ReelsNew