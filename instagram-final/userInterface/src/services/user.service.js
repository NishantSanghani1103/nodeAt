import { api } from "./apiClient"

export const userSingleViewApi = (token) => {
    return api.get("/user/view", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}