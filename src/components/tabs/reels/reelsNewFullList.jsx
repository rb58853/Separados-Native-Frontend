import { View, FlatList, Text, ScrollView, SafeAreaView } from "react-native";
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
    // let count = 10;
    // while (count > 0) {
    // usersView.push(<UserReel navigation={navigation} userKey={'mia'} />)
    // count -= 1
    // }

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
    const [scrollPositionY, setScrollPositionY] = useState(0)

    //Alternate follow value for each scrolling
    const [wasScroll, setWasScroll] = useState(false)
    const [opacity, setOpacity] = useState(1)

    const ref = useRef();

    useEffect(() => {
        ref.current.scrollTo({ y: indexUser * heightSpace, animated: true })
    }, [indexUser])

    useEffect(() => {
        ref.current.scrollTo({ y: indexUser * heightSpace, animated: true })
    }, [wasScroll])

    const listUserView = usersView.map((user, index) => {
        return <View style={
            [
                {
                    zIndex: 10,
                    position: 'absolute',
                    top: heightSpace * (index),
                    opacity: index == indexUser ? opacity : 1 - opacity
                },

                (scrollPositionY >= heightSpace * indexUser && index == indexUser + 1) ||
                    (scrollPositionY <= heightSpace * indexUser && index == indexUser - 1) || (index == indexUser) ?
                    {}
                    :
                    { display: 'none' }
            ]}
        >
            {user}
        </View>
    })

    return (
        <SafeAreaView>
            <ScrollView
                ref={ref}
                style={{ backgroundColor: 'rgba(15,15,20,1)' }}
                // pagingEnabled={true}

                // getItemLayout={(_data, index) => ({
                //     length: heightSpace,
                //     offset: heightSpace * index,
                //     index,
                // })}

                onMomentumScrollEnd={(e) => {
                    SwitchUser(e.nativeEvent.contentOffset.y, setIndexUser, indexUser, usersView.length, indexUser * heightSpace)
                    SetWasScroll(e.nativeEvent.contentOffset.y, setWasScroll, wasScroll, indexUser * heightSpace)
                    // setWasScroll(!wasScroll)

                }}
                onScroll={(e) => {
                    onScrollHandler(e.nativeEvent.contentOffset.y, setOpacity, heightSpace * (indexUser))
                    setScrollPositionY(e.nativeEvent.contentOffset.y)
                }}
            >

                <View style={{ height: reelHeight + heightSpace * (usersView.length - 1) }} />
                {listUserView}


            </ScrollView>
        </SafeAreaView >
    )
}

function SwitchUser(y, setIndexUser, indexUser, usersLenght, position) {
    if ((y - position) >= heightSpace / 2 && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
    }
    if ((y - position) <= -(heightSpace / 2) && indexUser > 0) {
        setIndexUser(indexUser - 1)
    }
}

function SetWasScroll(y, setWasScroll, wasScroll, position) {
    if (((y - position) > -(heightSpace / 2)) && ((y - position) < heightSpace / 2)) {
        setWasScroll(!wasScroll)
    }
}

function onScrollHandler(y, setOpacity, center) {
    setOpacity((heightSpace - Math.abs(y - center) + 0) / (heightSpace))

}
export default ReelsNew