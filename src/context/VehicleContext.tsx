import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
} from 'react';
import { IVehicle } from '../types/types';
import { getVehicles } from '../services/getVehicles';

type ContextType = {
    vehicles: IVehicle[];
    setVehicles: Dispatch<SetStateAction<IVehicle[]>>;

    mapVehicle: IVehicle[];
    setMapVehicle: Dispatch<SetStateAction<IVehicle[]>>;

    //map vehicle => single element array used to display clicked car on map
};

const VehicleContext = createContext<ContextType>({
    vehicles: [],
    setVehicles: () => {},

    mapVehicle: [], //single element
    setMapVehicle: () => {},
});

export const useVehicleContext = () => {
    const context = useContext(VehicleContext);

    if (!context) {
        throw new Error(
            'useFiltersContext must be used within FiltersContext.Provider'
        );
    }

    return context;
};

export const VehicleProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [mapVehicle, setMapVehicle] = useState<IVehicle[]>([]);

    useEffect(() => {
        getVehicles().then((data) => {
            setVehicles(data);
            setMapVehicle(data[0]);
        });
    }, []);

    return (
        <VehicleContext.Provider
            value={{ vehicles, setVehicles, mapVehicle, setMapVehicle }}
        >
            {children}
        </VehicleContext.Provider>
    );
};
