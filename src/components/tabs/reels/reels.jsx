import { View, Text, FlatList } from "react-native";
import users from "../../../data/users";
import React, { useEffect, useRef, useState } from "react";
import defaulStyles from "../../../styles";
import UserReel, { reelHeight } from "../../user/user-reel/userReel";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from "@react-navigation/native";
import env, { bottomBarHeight } from "../../../environment/environment";
import { GetAllUsersInformation } from "../../../api/information";

function Reels({ navigation }) {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('reels'))
        }, []))

    const usersView = []    

    const getUsers = GetAllUsersInformation()

    Object.values(getUsers).forEach((user_, index) => {
        if (user_.id != env['profile'])
            usersView.push({ id: index, user: user_.id })
    })

    // Object.values(users).forEach((user_, index) => {
    //     if (user_.nick != env['profile'])
    //         usersView.push({ id: index, user: user_.nick })
    // })

    const renderItem = ({ item }) => (
        <UserReel navigation={navigation} userKey={item.user} />
    );

    const [indexUser, setIndexUser] = useState(0)

    const ref = useRef()

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
                showsVerticalScrollIndicator={false}

                // getItemLayout={(_data, index) => ({
                //     length: reelHeight,
                //     offset: reelHeight * index,
                //     index,
                // })}

                // decelerationRate='slow'
                pagingEnabled
            />
        </View>
    )
}
export default Reels