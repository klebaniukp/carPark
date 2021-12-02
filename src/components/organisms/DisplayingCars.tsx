import { useState, useEffect } from 'react';
import { useVehicleContext } from '../../context/VehicleContext';
import { Car } from './Car';

export const DisplayingCars = () => {
    const { vehicles } = useVehicleContext();

    return (
        <>
            <div
                className={
                    'd-flex flex-column justify-content-center text-center'
                }
            >
                <p>Cars:</p>
                <div
                    className={
                        'd-flex flex-row justify-content-center align-center'
                    }
                >
                    {vehicles.map((vehicle: any) => (
                        <>
                            <Car
                                energy={vehicle.batteryLevelPct}
                                carName={vehicle.name}
                            />
                        </>
                    ))}
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
};
