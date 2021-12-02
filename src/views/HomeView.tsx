import { useEffect, useState } from 'react';
// import App from '../App';
import { DisplayingCars } from '../components/organisms/carComps/DisplayingCars';
import { CarScreen } from '../components/organisms/carComps/CarScreen';
import { useVehicleContext } from '../context/VehicleContext';

export const HomeView = () => {
    const { vehicles } = useVehicleContext();
    const [isRenderPossible, setIsRenderPossible] = useState(false);

    useEffect(() => {
        if (vehicles !== undefined) setIsRenderPossible(true);
    }, []);

    return (
        <>
            {/* {vehicles.map(
                (vehicle: { name: string; batteryLevelPct: number }) => {
                    if (vehicle !== undefined) {
                        setEnergy(vehicle.batteryLevelPct);
                        setCarName(vehicle.name);

                        <>
                            <CarScreen carIndex={vehicles} />
                            <div>home view</div>
                        </>;
                    }
                }
            )} */}
            {isRenderPossible ? (
                <CarScreen carIndex={vehicles} />
            ) : (
                <div>
                    Rendering is not possible, check your internet connection
                    and then try again.
                </div>
            )}
        </>
    );
};
