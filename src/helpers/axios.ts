//ts_ignore
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});
axiosInstance.interceptors.response.use((response: any) => response,
    (error:any) => {
        return Promise.reject(error);
    });

export  default  axiosInstance
