import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:8000/`
})

api.interceptors.request.use((req) => {
    console.log(req.data);
    return req
})

api.interceptors.response.use((res) => {
    console.log(res);
    return res
})