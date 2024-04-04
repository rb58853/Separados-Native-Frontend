import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile/profileSlice'
import bottomBarReducer from './bottomBar/bottomBarSlice'

export const store = configureStore({
  reducer: {
    bottomBar: bottomBarReducer,
    profile: profileReducer,
  },
});