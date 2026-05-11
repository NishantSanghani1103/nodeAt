import { api } from "./apiClient"


export const postViewAllApi = async () => {
    return api.get("/post/view-all")
}

export const postViewByIdApi = async (id) => {
    return api.get(`post/view/${id}`)
}