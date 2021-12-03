import { useEffect, useState } from 'react';
import { Car } from './Car';
import { useVehicleContext } from '../../../context/VehicleContext';
import { CarInformation } from '../../molecules/carComps/CarInformation';
import { IInfo } from '../../../types/types';

export const CarScreen = (props: { carIndex: number }) => {
    const { vehicles } = useVehicleContext();
    // let info: IInfo;

    useEffect(() => {}, []);

    return (
        <div
            className={
                'd-flex flex-wrap flex-row align-items-center text-center justify-content-center'
            }
        >
            {vehicles.map((car: any) => {
                let info: IInfo = {
                    color: car.color,
                    discriminator: car.discriminator,
                    id: car.id,
                    platesNumber: car.platesNumber,
                    rangeKm: car.rangeKm,
                    sideNumber: car.sideNumber,
                    status: car.status,
                    type: car.type,
                };
                return (
                    <div
                        style={{
                            height: '100vh',
                            width: '100%',
                        }}
                        className={
                            'd-flex flex-row flex-wrap justify-content-center align-items-center'
                        }
                    >
                        <div
                            className={
                                'd-flex flex-wrap flex-row justify-content-evenly align-items-center border border-2 w-75 h-50 bg-light'
                            }
                        >
                            <div className={'m-2'}>
                                <Car
                                    energy={car.batteryLevelPct}
                                    carName={car.name}
                                    carWidth={'15vw'}
                                    barWidth={'14vw'}
                                />
                            </div>
                            <div className={'m-2'}>
                                <CarInformation info={info} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
