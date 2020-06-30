import axios from 'axios';

const LabeX = axios.create({
    baseURL:
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victorgutierrez',
});

export default LabeX;
