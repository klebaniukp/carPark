import { useState, useEffect } from 'react';
import { CarImage } from '../../atoms/carComps/CarImage';
import { useVehicleContext } from '../../../context/VehicleContext';

export const CarMapComp = (props: {
    lat: number;
    lng: number;
    text: string;
}) => {
    const [isHover, setIsHover] = useState(false);
    const { mapVehicle } = useVehicleContext();

    return (
        <>
            {isHover ? (
                <div
                    className={
                        'd-flex align-center text-center align-items-center justify-content-center border rounded-pill'
                    }
                    style={{
                        width: '6vw',
                        height: '5vh',
                        opacity: 0.7,
                        backgroundColor: '#808080',
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div style={{ margin: 0, padding: 0, marginTop: '0.7vh' }}>
                        <CarImage width={'3vw'} />
                    </div>
                    <p>{JSON.stringify(mapVehicle[0].name)}</p>
                </div>
            ) : (
                <div
                    className={
                        'd-flex align-center text-center align-items-center justify-content-center border rounded-pill'
                    }
                    style={{
                        width: '6vw',
                        height: '5vh',
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div style={{ margin: 0, padding: 0, marginTop: '0.7vh' }}>
                        <CarImage width={'3vw'} />
                    </div>
                    <p>{JSON.stringify(mapVehicle[0].name)}</p>
                </div>
            )}
        </>
    );
};
