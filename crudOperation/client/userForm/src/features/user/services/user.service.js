import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_URL
})

export const addUser = (formValue) => {
    return api.post("/add", formValue)
}
export const userViewApi = () => {
    return api.get("/view")
}
export const userDeleteApi = (id) => {
    return api.delete(`/delete/${id}`)
}
export const userSingleViewApi = (id) => {
    return api.get(`/view/${id}`)
}

export const userUpdateApi = (id, formData) => {
    return api.put(`/edit/${id}`, formData)
}