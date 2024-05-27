import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const authStorageString = localStorage.getItem('auth-storage'); 
        if (authStorageString) {
            const authStorage = JSON.parse(authStorageString);
            const user = authStorage?.state?.user;
            if (user && user.token) {
                config.headers['Authorization'] = `Bearer ${user.token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;