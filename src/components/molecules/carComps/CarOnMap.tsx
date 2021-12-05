import { useState } from 'react';
import { CarImage } from '../../atoms/carComps/CarImage';
import { useVehicleContext } from '../../../context/VehicleContext';

export const CarOnMap = () => {
    const [isHover, setIsHover] = useState(false);
    const { mapVehicle } = useVehicleContext();

    return (
        <div style={{ fontSize: '1.4vh' }}>
            {isHover ? (
                <div
                    className={
                        'd-flex align-center text-center align-items-center justify-content-center border rounded'
                    }
                    style={{
                        width: '8vw',
                        height: '5vh',
                        opacity: 0.7,
                        backgroundColor: '#808080',
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div
                        style={{
                            margin: 0,
                            padding: 0,
                            marginTop: '0.7vh',
                            paddingTop: '0.3vh',
                            marginLeft: '0.5vh',
                        }}
                    >
                        <CarImage width={'3vw'} />
                    </div>
                    <p
                        style={{
                            margin: 0,
                            padding: 0,
                            marginTop: '0.5vh',
                            marginRight: '0.5vh',
                        }}
                    >
                        {mapVehicle[0].name}
                    </p>
                </div>
            ) : (
                <div
                    className={
                        'd-flex align-center text-center align-items-center justify-content-center border rounded'
                    }
                    style={{
                        width: '8vw',
                        height: '5vh',
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div
                        style={{
                            margin: 0,
                            padding: 0,
                            marginTop: '0.7vh',
                            paddingTop: '0.3vh',
                            marginLeft: '0.5vh',
                        }}
                    >
                        <CarImage width={'3vw'} />
                    </div>
                    <p
                        style={{
                            margin: 0,
                            padding: 0,
                            marginTop: '0.5vh',
                            marginRight: '0.5vh',
                        }}
                    >
                        {mapVehicle[0].name}
                    </p>
                </div>
            )}
        </div>
    );
};
