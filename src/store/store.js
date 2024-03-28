import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import bottomBarReducer from './bottomBar/bottomBarSlice'

export const store = configureStore({
  reducer: {
    bottomBar: bottomBarReducer,
    user: userReducer,
  },
});