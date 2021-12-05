import React from 'react';
import { CarOnMap } from '../../molecules/carComps/CarOnMap';
import { useFiltersContext } from '../../../context/FiltersContext';

export const CarMapComp = (props: {
    lat: number;
    lng: number;
    text: string;
}) => {
    const { isToast, setIsToast } = useFiltersContext();
    return (
        <div>
            <div
                onClick={() => {
                    setIsToast(!isToast);
                    console.log(`change to: ${isToast}`);
                }}
            >
                <CarOnMap />
            </div>
        </div>
    );
};
