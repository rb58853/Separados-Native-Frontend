import { View, FlatList, Text, ScrollView } from "react-native";
import users from "../../../data/users";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

    Object.values(users).forEach((user, index) => {
        if (user.nick != env['profile'])
            usersView.push(<UserReel navigation={navigation} userKey={user.nick} key={index} />)
    })

    Object.values(users).forEach((user, index) => {
        if (user.nick != env['profile'])
            usersView.push(<UserReel navigation={navigation} userKey={user.nick} key={index} />)
    })

    Object.values(users).forEach((user, index) => {
        if (user.nick != env['profile'])
            usersView.push(<UserReel navigation={navigation} userKey={user.nick} key={index} />)
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
    const [preIndexView, setPreIndexView] = useState(indexUser > 0 ? usersView[indexUser - 1] : null)
    const [postIndexView, setPostIndexView] = useState(indexUser < usersView.length ? usersView[indexUser + 1] : null)

    const [secundaryDisplay, setSecundaryDisplay] = useState('flex')

    const ref = useRef();

    useLayoutEffect(() => {
        setOpacity(1)
        // setIndexView(usersView[indexUser])
        // if (indexUser > 0)
        //     setPreIndexView(usersView[indexUser - 1])
        // else
        //     setPreIndexView(null)

        // if (indexUser < usersView.length)
        //     setPostIndexView(usersView[indexUser + 1])
        // else
        //     setPostIndexView(null)

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

                onScrollEndDrag={(e) => {
                    // SwitchView(e.nativeEvent.contentOffset.y, indexUser, usersView.length, ref)
                }}
                onMomentumScrollEnd={(e) => {
                    // SwitchUser(e.nativeEvent.contentOffset.y, setIndexUser, indexUser, usersView.length, ref)
                    setWasScroll(!wasScroll)
                }}
                onScroll={(e) => {
                    DynamicSwitchUser(e.nativeEvent.contentOffset.y, setIndexUser, indexUser, usersView.length, ref)
                    onScrollHandler(e.nativeEvent.contentOffset.y, setOpacity, heightSpace)
                    setScrollPositionY(e.nativeEvent.contentOffset.y)
                }}
                onScrollToTop={(e)=>{
                }}
            >

                <View style={{ height: heightSpace }} />
                <View style={{ height: reelHeight }} />


                <View style={
                    [
                        {
                            zIndex: 1,
                            position: 'absolute',
                            top: 0,
                            opacity: 1 - opacity
                        },

                        scrollPositionY == heightSpace ? { top: heightSpace } :
                            scrollPositionY > heightSpace ?
                                { display: 'none' } :
                                {}
                    ]
                }
                >
                    {indexUser > 0 && usersView[indexUser - 1]}
                    {/* {preIndexView} */}
                </View>


                <View style={
                    {
                        zIndex: 0,
                        position: 'absolute',
                        top: heightSpace,
                        // opacity: 1
                        opacity: opacity
                    }}
                >
                    {usersView[indexUser]}
                    {/* {indexView} */}
                </View>

                <View style={
                    [
                        {
                            zIndex: 1,
                            position: 'absolute',
                            bottom: 0,
                            opacity: 1 - opacity
                        },

                        scrollPositionY == heightSpace ? { bottom: heightSpace } :
                            scrollPositionY < heightSpace ?
                                { display: 'none' } :
                                {}
                    ]
                }
                >
                    {indexUser < usersView.length && usersView[indexUser + 1]}
                    {/* {postIndexView} */}
                </View>

                <View style={{ height: heightSpace }} />
            </ScrollView >
        </View >
    )
}

function SwitchView(y, indexUser, usersLenght, ref) {
    if ((y - heightSpace) >= 100 && indexUser < usersLenght - 1) {
        ref.current.scrollTo({ y: 2 * heightSpace, animated: true })
        return true
    }
    if ((y - heightSpace) <= -100 && indexUser > 0) {
        ref.current.scrollTo({ y: 0, animated: true })
        return true
    }
    return false
}

function SwitchUser(y, setIndexUser, indexUser, usersLenght) {
    if ((y - 200) >= 197 && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
    }
    if ((y - 200) <= -197 && indexUser > 0) {
        setIndexUser(indexUser - 1)
    }
}
function onScrollHandler(y, setOpacity, center) {
    setOpacity((center - Math.abs(y - center) + 0) / (200))
}

function DynamicSwitchUser(y, setIndexUser, indexUser, usersLenght, ref) {
    if ((y - heightSpace) >= 197 && indexUser < usersLenght - 1) {
        setIndexUser(indexUser + 1)
        ref.current.scrollTo({ y: heightSpace, animated: false })
    }
    if ((y - heightSpace) <= -197 && indexUser > 0) {
        setIndexUser(indexUser - 1)
        ref.current.scrollTo({ y: heightSpace, animated: false })
    }
}

export default ReelsNew