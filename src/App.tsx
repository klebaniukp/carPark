import React from 'react';
import './App.css';
import { Car } from './components/organisms/Car';
import { SideBar } from './components/organisms/SideBar';

function App() {
    // const url = 'https://dev.vozilla.pl/api-client-portal/';
    // fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'x-ctx-organization-id': '38c6047f-d9fd-496b-b4d6-27785499c6d7',
    //     },
    // }).then((res) => {
    //     const data = res;
    //     console.log(data);
    // });

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
