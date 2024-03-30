import React from "react";
import { View, FlatList } from "react-native";
import users from "../../../data/users";
import UserFast from "../../user/userFast/userFast";
import defaulStyles from "../../../styles";
import { useDispatch } from "react-redux";
import { setScreen } from "../../../store/bottomBar/bottomBarSlice";
import { useFocusEffect } from '@react-navigation/native';
import env from "../../../environment/environment";

function DefaulHome({ navigation }) {
    const usersView = []
    Object.values(users).forEach((user_, index) => {
        if (user_.nick != env['profile'])
            usersView.push({ id: index, user: user_.nick })
    })

    const renderItem = ({ item }) => (
        <UserFast navigation={navigation} userKey={item.user} />
    );

    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(setScreen('home'))
        }, []))

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