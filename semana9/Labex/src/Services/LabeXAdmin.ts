import axios from 'axios';

const LabeXAdmin = axios.create({
    baseURL:
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victorgutierrez',
    timeout: 10000,
    headers: {
        auth: JSON.parse(sessionStorage.getItem('adminToken')!),
    },
});

export default LabeXAdmin;
