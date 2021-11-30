import axios from 'axios';
import https from 'https';

const url = 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';

// const api = axios.create({
//     baseURL: url,
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     responseType: 'json',
//     httpsAgent: new https.Agent({ rejectUnauthorized: false }),
// });

export const vehicles = () => {
    axios({
        url: url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
        .then((response) => {
            console.log(`typeof response: ${typeof response}`);
            console.log(response.data.objects[0].discriminator);
        })
        .catch((err) => {
            console.log(err);
        });
};

//todo: add data to context ( when its done )
