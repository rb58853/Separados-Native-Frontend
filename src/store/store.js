import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile/profileSlice'
import usersReducer from './users/usersSlice'
import bottomBarReducer from './bottomBar/bottomBarSlice'

export const store = configureStore({
  reducer: {
    bottomBar: bottomBarReducer,
    profile: profileReducer,
    users: usersReducer,
  },
});