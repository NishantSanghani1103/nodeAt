import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: Cookies.get("USER") ? JSON.parse(Cookies.get("USER")) : null,
        token: Cookies.get("TOKEN") ?? ""
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload.user
            Cookies.set("USER", JSON.stringify(state.user))
            state.token = action.payload.token
            Cookies.set("TOKEN", state.token)
        },
        logOut: (state) => {
            state.user = null
            state.token = ""
            Cookies.remove("USER")
            Cookies.remove("TOKEN")
        }
    }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer