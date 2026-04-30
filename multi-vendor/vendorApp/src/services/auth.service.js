import { api } from "./apiClient"

export const loginService = (data) => {
    return api.post("/auth/login", data)
}