import axios from "axios";
import { SERVER_ENDPOINT } from "../utils/apiEndpoints";

export const axiosClient = axios.create({
    baseURL: SERVER_ENDPOINT,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-type": "application/json",
    },
    withCredentials: true,
    timeout: 10000,
});