import { useState, useEffect } from 'react';
import { useVehicleContext } from '../../../context/VehicleContext';
import { Car } from './Car';

export const DisplayingCars = () => {
    const { vehicles } = useVehicleContext();
    console.log(vehicles[0]);

    return (
        <>
            <div>something</div>
        </>
    );
};
