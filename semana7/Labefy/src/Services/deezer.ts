import axios from 'axios';

const deezer = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': 'd9ad208447msh57bcad17c77a7fap190c6ajsn09b938f57910',
    },
});

export default deezer;
