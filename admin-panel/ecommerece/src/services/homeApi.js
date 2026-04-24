import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const productViewApi = () => {
    return api.get("/product/view")
}

export const categoryViewApi = () => {
    return api.get("/category/view")
}