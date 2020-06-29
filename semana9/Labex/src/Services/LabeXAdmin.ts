import axios from 'axios';

const LabeXAdmin = axios.create({
    baseURL:
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victorgutierrez',
    timeout: 10000,
    headers: {
        auth: sessionStorage.getItem('adminToken'),
    },
});

export default LabeXAdmin;
