import React from 'react';
import './App.css';
import { Car } from './components/organisms/Car';
import { SideBar } from './components/organisms/SideBar';
import https from 'https';
import axios from 'axios';

// const data = { data: 'data' };

function App() {
    const url =
        'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';
    // fetch(url, {
    //     method: 'GET',
    //     agent: new https.Agent({
    //         rejectUnauthorized: false,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'x-ctx-organization-id': '38c6047f-d9fd-496b-b4d6-27785499c6d7',
    //     },
    // })
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
            // const data = JSON.parse(response.data);
            // console.log(`data: ${data}`);
            console.log(`response: ${JSON.stringify(response)}`);
        })
        .then((json) => {
            console.log(json);
        });

    return (
        <>
            <SideBar />
            <div
                className={'d-flex flex-wrap flex-row justify-content-center'}
                style={{ width: '74vw' }}
            >
                <Car />
                <Car />
            </div>
        </>
    );
}

export default App;
