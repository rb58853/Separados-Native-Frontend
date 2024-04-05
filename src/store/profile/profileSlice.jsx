import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    lastName: "",
    email: '',
    profilePhoto: '',
    shortBibliografy: '',
    bibliografy: '',
    height: '',
    weight: '',
    dateBorn: '',
    province: '',
    municipe: '',
    genre: '',
    sexual_orientation: '',
    profession: '',
    tags: [],
    images: []
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            // Recibe Un diccionario que representa un usuario
            console.log(`Lo que entra a setProfile: ${JSON.stringify(action.payload)}`)

            Object.keys(action.payload).forEach((key) => {
                state[key] = action.payload[key];
            })
        },
    },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;