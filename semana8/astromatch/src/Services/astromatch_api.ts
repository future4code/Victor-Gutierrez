import axios from 'axios';

const astromatch = axios.create({
    baseURL:
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victorgutierrez',
});

export default astromatch;
