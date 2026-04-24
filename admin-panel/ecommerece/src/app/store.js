import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})