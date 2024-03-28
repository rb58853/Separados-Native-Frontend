import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: true,
    screen: 'home',
};

export const bottomBarSlice = createSlice({
    name: "bottomBar",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },

        setScreen: (state, action) => {
            state.screen = action.payload;
        },
    },
});

export const { setActive, setScreen } = bottomBarSlice.actions;
export default bottomBarSlice.reducer;