import React from "react";
import { View, FlatList, Text } from "react-native";
import UserFast from "../../user/userFast/userFast";
import defaulStyles from "../../../styles";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from '@react-navigation/native';
import env from "../../../environment/environment";
import { GetAllUsersInformation } from "../../../api/information";

function DefaulHome({ navigation }) {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('home'))
        }, []))

    const usersView = []
    const getUsers = GetAllUsersInformation()

    Object.values(getUsers).forEach((user_, index) => {
        if (user_.id != env['profile'])
            usersView.push({ id: index, user: user_.id })
    })

    const renderItem = ({ item }) => (
        <UserFast navigation={navigation} userKey={item.user} />
    );

    return (
        <View style={defaulStyles.container}>
            <FlatList
                data={usersView}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={{ backgroundColor: 'rgba(15,15,20,1)' }}
                contentContainerStyle={{ gap: 3 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default DefaulHome