import React from 'react';
import './App.css';
import { Car } from './components/organisms/Car';
import { SideBar } from './components/organisms/SideBar';
import https from 'https';
import axios from 'axios';

function App() {
    const url =
        'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';
    
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
