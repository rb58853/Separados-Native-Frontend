import { setUser, setName, setEmail, setAddress, setApartamentNumber, setPostalCode, setCity, setCountry,setProvince, setLastName } from "./userSlice";
import { FullUser, User } from './persistentData'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function GetUser() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUser(FullUser()))
    })
}

// export function SetUser(dispatch, country, name, last_name, email, city, address, apartament_number, state, postal_code) {
//     dispatch(setUser(country, name, last_name, email, city, address, apartament_number, state, postal_code));
// }

export function SetCountry(dispatch) {
    dispatch(setCountry(User('country')));
}

export function SetAddress(dispatch) {
    dispatch(setAddress(User('address')));
}

export function SetEmail(dispatch) {
    dispatch(setEmail(User('email')));
}

export function SetName(dispatch) {
    dispatch(setName(User('name')));
}

export function SetLastName(dispatch) {
    dispatch(setLastName(User('last_name')));
}
export function SetApartamentNumber(dispatch) {
    dispatch(setApartamentNumber(User('apatament_number')));
}

export function SetProvince(dispatch) {
    dispatch(setProvince(User('province')));
}

export function SetPostalCode(dispatch) {
    dispatch(setPostalCode(User('postal_code')));
}

export function SetCity(dispatch) {
    dispatch(setCity(User('city')));
}