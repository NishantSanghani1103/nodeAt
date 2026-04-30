import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")) || {
            userName: "",
            userRole: ""
        },
        token: localStorage.getItem("TOKEN") ?? ''
    },
    reducers: {
        logIn: (state, action) => {
            console.log(action.payload);
            state.user = {
                userName: action.payload.user.userName,
                userRole: action.payload.user.userRole
            }
            localStorage.setItem("USER", JSON.stringify(state.user))
            state.token = action.payload.token
            localStorage.setItem("TOKEN", state.token)
        },
        logOut: (state, action) => {
            state.user = {
                userName: "",
                userRole: ""
            }
            state.token = ""
            localStorage.removeItem("TOKEN")
            localStorage.removeItem("USER")
        }
    }
})

export const { logIn,logOut } = userSlice.actions;
export default userSlice.reducer;