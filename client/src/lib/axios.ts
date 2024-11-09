import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { storage, STORAGE_KEY } from '@/utilities/sessionStorage';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const authRequestInterceptor = (
    config: InternalAxiosRequestConfig<AxiosRequestConfig>
): InternalAxiosRequestConfig => {
    const token = storage.get(STORAGE_KEY.accessToken);
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
};

export const axios = Axios.create({
    baseURL: BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor, (error) => Promise.reject(error));
axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.status === 401) {
            storage.clear();
            window.location.href = '/auth/login';
        }

        throw error.response;
    }
);
