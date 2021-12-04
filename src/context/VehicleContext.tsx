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
import { Navbar } from '../components/organisms/layoutComps/Navbar';

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

    useEffect(() => {
        getVehicles().then((data) => setVehicles(data));
    }, []);

    return (
        <VehicleContext.Provider value={{ vehicles, setVehicles }}>
            <Navbar />
            {children}
        </VehicleContext.Provider>
    );
};
