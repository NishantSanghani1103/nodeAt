import { api } from "./apiClient"

export const registerApi = async (data) => {
    return api.post("/auth/register", data)
}

export const loginApi = async (data) => {
    return api.post("/auth/login", data)
}