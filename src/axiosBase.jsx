import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default axiosBase;