import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) ?? null,
        token: localStorage.getItem("token") ?? null
    },
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            localStorage.setItem("token", state.token)
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }
})

export const { logIn,logOut } = userSlice.actions

export default userSlice.reducer