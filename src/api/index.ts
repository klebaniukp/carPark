import axios from 'axios';
import https from 'https';

const url = 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';

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

//httpsAgent: for ignoring SSL certificate errors (api SSL certificate is down)