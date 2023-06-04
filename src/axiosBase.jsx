import axios from 'axios';

const axiosBodySystem= axios.create({
    baseURL: 'http://localhost:5000/body-system',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default axiosBodySystem;