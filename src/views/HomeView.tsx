import React from 'react';
import App from '../App';
import { useVehicleContext } from '../context/VehicleContext';
import { DisplayingCarInfo } from '../components/organisms/DisplayingCarInfo';

export const HomeView = () => {
    return (
        <>
            <div>
                <DisplayingCarInfo />
            </div>
        </>
    );
};
