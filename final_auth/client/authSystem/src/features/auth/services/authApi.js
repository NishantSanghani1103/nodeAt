import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL
})

export const register = (formValue) => {
    return api.post("/register", formValue)
}

export const login = (formValue) => {
    return api.post("/login", formValue)
}

export const changePassword = (formValue, token) => {
    return api.post("/change-password", formValue,
        {
            headers: {
                Authorization:`Bearer ${token}`
            }
        }
    )
}