import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL
})

export const userRegisterApi = (data) => {
    return api.post("/auth/register", data)
}

export const userLoginApi = (data) => {
    return api.post("/auth/login", data)
}

export const forgotPasswordApi = (data) => {
    return api.post("/auth/forgot-password", data)
}

export const changePasswordApi = (data,token) => {
    return api.post("/auth/change-password",data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}