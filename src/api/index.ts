import axios from 'axios';
import https from 'https';

const url = 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';

// const API = axios.create({
//     baseURL: url,
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     responseType: 'json',
//     httpsAgent: new https.Agent({ rejectUnauthorized: false }),
// });

// export const fetchVehicles = () => API.get('/');

export const fetchVehicles = () =>
    axios({
        url: url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
