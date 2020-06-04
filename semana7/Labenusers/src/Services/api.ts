import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers',
    timeout: 10000,
    headers: { Authorization: 'victor-gutierrez-mello' },
});
