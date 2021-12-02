import { useEffect, useState } from 'react';
import './App.css';
import { Car } from './components/organisms/Car';
import { SideBar } from './components/organisms/SideBar';

export default function App() {
    // const { vehicles, setVehicles } = useVehicleContext();
    // const [myVehicles, setMyVehicles] = useState('');

    return (
        <>
            <SideBar />
            <div
                className={'d-flex flex-wrap flex-row justify-content-center'}
                style={{ width: '74vw' }}
            >
                <Car energy={0} carName={''} />
                <Car energy={0} carName={''} />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                    className={
                        'd-flex flex-wrap justify-content-cente text-wrap'
                    }
                    style={{ width: '10vw' }}
                >
                    {/* My vehicles: {myVehicles} */}
                </div>
            </div>
        </>
    );
}
