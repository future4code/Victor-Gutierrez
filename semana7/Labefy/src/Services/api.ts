import axios from 'axios';

const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy',
    headers: {
        Authorization: 'victor-gutierrez-mello',
    },
});

export default api;
