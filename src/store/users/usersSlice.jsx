import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/user";

const initialState = {
    
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            //Esto recibe una lista de usuarios
            console.log(`Lo que entra a setUsers: ${JSON.stringify(action.payload)}`)
            
            Object.values(action.payload).forEach(userJson => {
                // state.users[userJson.id] = (new User(userJson))
                state[userJson.id] = userJson
            });
        },

        addUser: (state, action) => {
            state.users[action.payload.id] = (new User(action.payload))
        },

        // deleteUser: (state, action) => {
        //     state.users.pop(new User(action.payload))
        // },
    },
});

export const { setUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;