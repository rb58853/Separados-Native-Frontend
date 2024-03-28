import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    last_name:'',
    email: '',
    city: '',
    address: '',
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Recibe una lista de parametros en orden
            state.country = action.payload[0];
            state.name = action.payload[1];
            state.last_name = action.payload[2];
            state.email = action.payload[3];
            state.city = action.payload[4];
            state.address = action.payload[5];
            state.apartament_number = action.payload[6];
            state.province = action.payload[7];
            state.postal_code = action.payload[8];
        },

        setCountry: (state, action) => {
            state.country = action.payload;
        },

        setName: (state, action) => {
            state.name = action.payload;
        },

        setLastName: (state, action) => {
            state.last_name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },

        setCity: (state, action) => {
            state.city = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },

        setApartamentNumber: (state, action) => {
            state.apartament_number = action.payload;
        },

        setProvince: (state, action) => {
            state.province = action.payload;
        },

        setPostalCode: (state, action) => {
            state.postal_code = action.payload;
        },
    },
});

export const { setUser, setCountry, setName, setLastName, setEmail, setCity, setAddress, setApartamentNumber, setProvince, setPostalCode } = userSlice.actions;
export default userSlice.reducer;