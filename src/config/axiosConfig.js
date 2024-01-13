import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7213/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.error('Request failed', error);
        return Promise.reject(error);
    }
);

export default instance;