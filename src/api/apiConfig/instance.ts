import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    method: 'GET',
    headers: {
        'X-API-KEY': 'c2cb13de-6ef9-400f-91ac-2bdccec3e363',
        'Content-Type': 'application/json',
    }
})