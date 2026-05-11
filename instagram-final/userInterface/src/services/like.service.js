import { api } from "./apiClient"

export const likeViewPostByIdApi = (id) => {
    return api.get(`/like/view/${id}`)
}