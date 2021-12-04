import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
} from 'react';
import { Navbar } from '../components/organisms/layoutComps/Navbar';

type ContextType = {
    status: boolean;
    setStatus: Dispatch<SetStateAction<boolean>>;

    batteryLevelPct: number;
    setBatteryLevelPct: Dispatch<SetStateAction<number>>;

    rangeKm: number;
    setRangeKm: Dispatch<SetStateAction<number>>;
};

const FiltersContext = createContext<ContextType>({
    status: true,
    setStatus: () => {},

    batteryLevelPct: 5,
    setBatteryLevelPct: () => {},

    rangeKm: 5,
    setRangeKm: () => {},
});

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error(
            'useFiltersContext must be used within FiltersContext.Provider'
        );
    }

    return context;
};

export const FiltersProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [status, setStatus] = useState<boolean>(true);
    const [batteryLevelPct, setBatteryLevelPct] = useState<number>(5);
    const [rangeKm, setRangeKm] = useState<number>(5);

    return (
        <FiltersContext.Provider
            value={{
                status,
                setStatus,
                batteryLevelPct,
                setBatteryLevelPct,
                rangeKm,
                setRangeKm,
            }}
        >
            <Navbar />
            {children}
        </FiltersContext.Provider>
    );
};
