import React, {
    createContext,
    useContext,
    useState,
    SetStateAction,
    Dispatch,
} from 'react';
import { IVehicle } from '../types/types';

type ContextType = {
    vehicles: IVehicle[];
    setVehicles: Dispatch<SetStateAction<IVehicle[]>>;
};

const VehicleContext = createContext<ContextType>({
    vehicles: [],
    setVehicles: () => {},
});

export const useVehicleContext = () => {
    const context = useContext(VehicleContext);

    if (!context) {
        throw new Error('Error while reading context');
    }

    return context;
};

export const VehicleProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);

    return (
        <VehicleContext.Provider value={{ vehicles, setVehicles }}>
            {children}
        </VehicleContext.Provider>
    );
};
