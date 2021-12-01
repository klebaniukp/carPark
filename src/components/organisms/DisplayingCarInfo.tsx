import { useState, useEffect } from 'react';
import {
    useVehicleContext,
    VehicleProvider,
} from '../../context/VehicleContext';

export const DisplayingCarInfo = () => {
    const { vehicles } = useVehicleContext();

    return (
        <>
            <div>
                displaying car info:
                <p>{JSON.stringify(vehicles[0])}</p>
            </div>
        </>
    );
};
