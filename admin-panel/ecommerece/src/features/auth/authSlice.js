import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")) || null,
        token: JSON.parse(localStorage.getItem("TOKEN")) || null
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload.user
            localStorage.setItem("USER", JSON.stringify(state.user))
            state.token = action.payload.token
            localStorage.setItem("TOKEN", JSON.stringify(state.token))
        },
        logOut: (state, action) => {
            state.user = null
            localStorage.removeItem("USER")
            state.token = null
            localStorage.removeItem("TOKEN")
        }
    }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer