import { View, FlatList, Text, ScrollView } from "react-native";
import users from "../../../data/users";
import React, { useEffect, useRef, useState } from "react";
import defaulStyles from "../../../styles";
import UserReel from "../../user/user-reel/userReel";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from "@react-navigation/native";
import env from "../../../environment/environment";
import { reelHeight } from "../../user/user-reel/style";


function ReelsNew({ navigation }) {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('reels'))
        }, []))

    const usersView = []
    let count = 10;
    while (count > 0) {
        // Object.values(users).forEach((user, index) => {
        //     if (user.nick != env['profile'])
        //         usersView.push(<UserReel navigation={navigation} userKey={user.nick} />)
        // })
        usersView.push(<UserReel navigation={navigation} userKey={'mia'} />)

        count -= 1
    }

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

    const [secundaryDisplay, setSecundaryDisplay] = useState('flex')

    const ref = useRef();

    useEffect(() => {
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: false })
        setOpacity(1)
    }, [indexUser])


    useEffect(() => {
        ref.current.scrollTo({ x: 0, y: heightSpace, animated: true })
    }, [wasScroll])

    return (
        <View>
            <ScrollView
                ref={ref}
                style={{ backgroundColor: 'rgba(15,15,20,1)' }}
                onScrollBeginDrag={(e) => { setDeltaY(e.nativeEvent.contentOffset.y) }}
                // showsVerticalScrollIndicator={false}


                onMomentumScrollEnd={(e) => {
                    setWasScroll(!wasScroll)
                    SwitchUser(e.nativeEvent.contentOffset.y, deltaY, setIndexUser, indexUser, usersView.length, setOpacity)
                }}
                onScroll={(e) => {
                    onScrollHandler(e.nativeEvent.contentOffset.y, setOpacity, heightSpace)
                    setScrollPositionY(e.nativeEvent.contentOffset.y)
                }}
            >

                <View style={{ height: heightSpace }} />
                <View style={{ height: reelHeight }} />


                <View style={[{ zIndex: 10, position: 'absolute', top: 0, opacity: 1 - opacity }, scrollPositionY >= 200 ? { display: 'none' } : {}]}>
                    {indexUser > 0 && usersView[indexUser - 1]}
                </View>

                <View style={{ zIndex: 1, position: 'absolute', top: heightSpace, opacity: opacity }}>
                    {usersView[indexUser]}
                </View>

                <View style={[{ zIndex: 10, position: 'absolute', bottom: 0, opacity: 1 - opacity }, scrollPositionY <= 200 ? { display: 'none' } : {}]}>
                    {indexUser < usersView.length && usersView[indexUser + 1]}
                </View>

                <View style={{ height: heightSpace }} />
            </ScrollView>
        </View>
    )
}
function SwitchUser(y, deltaY, setIndexUser, indexUser, usersLenght, setOpacity) {

    if ((y - 200) >= 190 && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
        // setOpacity(1)
    }
    if ((y - 200) <= -190 && indexUser > 0) {
        setIndexUser(indexUser - 1)
        // setOpacity(1)
    }
}
function onScrollHandler(y, setOpacity, center) {
    setOpacity((center - Math.abs(y - center) + 0) / (200))
}
export default ReelsNew