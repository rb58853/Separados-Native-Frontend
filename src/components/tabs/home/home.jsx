import React from "react";
import { View, FlatList, Text } from "react-native";
import UserFast from "../../user/userFast/userFast";
import defaulStyles from "../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from '@react-navigation/native';
import env from "../../../environment/environment";
import { GetAllUsersInformation, GetUserInformationById } from "../../../api/information";
import { SetUsersOnFocus } from "../../../store/users/functions";
import { LoadUsers } from "../../../api/loadUsers";
import { setUsers } from "../../../store/users/usersSlice";
import { SetProfileOnFocus } from "../../../store/profile/functions";
import { LoadUsersComponent } from "../../manageStore/loadUsers";

function DefaulHome({ navigation }) {
    LoadUsersComponent()
    const dispatch = useDispatch()

    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('home'))
        }, []))

    const users = useSelector((state) => (state.users))
    const usersView = []
    Object.values(users).forEach((user_, index) => {
        if (user_.id != env['profile'])
            usersView.push({ id: index, user: user_.id })
    })

    const renderItem = ({ item }) => (
        <UserFast navigation={navigation} userKey={item.user} />
    );

    return (
        <View style={defaulStyles.container}>
            {/* <Text style={{ fontSize: 40, color: 'white' }}>
                {testUsers['raul']['profession']}
            </Text> */}
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