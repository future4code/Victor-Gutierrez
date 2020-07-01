import axios from 'axios';

const planner = axios.create({
  baseURL:
    'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-victorgutierrez',
});

export default planner;
