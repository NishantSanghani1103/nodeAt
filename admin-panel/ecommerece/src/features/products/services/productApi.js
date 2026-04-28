import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const productSingleViewApi = (id) => {
    return api.get(`/product/view/${id}`)
}