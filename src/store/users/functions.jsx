import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUsers } from "./usersSlice";
import { useFocusEffect } from "@react-navigation/native";

export function GetUsers() {
    return useSelector((state) => (state.users))
}

/**
 * @param {Dictionary} users Recibe un diccionario de uasuarios en formato Json y lo guarda en el Store en modo de usuarios
 * @returns {User}
 */
export function SetUsers(users) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUsers(users))
    }, [])
    return users;
}

export function SetUsersOnFocus(users) {
    const dispatch = useDispatch();
    useFocusEffect(() => {
        dispatch(setUsers(users))
    })

    // return users;
}
export function AddUser(user) {

}
