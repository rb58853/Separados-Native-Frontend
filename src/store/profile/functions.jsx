import { setProfile } from "./profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

export function GetProfile() {
    return useSelector((state) => (state.profile))
}

export function SetProfile( user) {
    const dispatch = useDispatch();
    useFocusEffect(() => {
        dispatch(setProfile(user))
    })
    return user;
}
