import React, { useState } from 'react';
import { CarImage } from '../../atoms/carComps/CarImage';
import { ProgressBarCustom } from '../../atoms/layoutComps/ProgressBarCustom';
import { Name } from '../../atoms/layoutComps/Name';
import { SearchInfoButton } from '../../atoms/layoutComps/SearchInfoButton';
import { useHistory } from 'react-router-dom';
import { useVehicleContext } from '../../../context/VehicleContext';
import { IVehicle } from '../../../types/types';

export const CarModel = (props: {
    width: string;
    energy: number;
    barWidth: string;
    carName: string;
}) => {
    const { vehicles, mapVehicle, setMapVehicle } = useVehicleContext();
    const [isHover, setIsHover] = useState(false);
    const history = useHistory();

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setMapVehicle(settingVehicleForMap);
        console.log(mapVehicle);
        history.push(`/map/`);
    };

    const settingVehicleForMap = () => {
        const returnedVehicles: IVehicle[] = [];
        vehicles.map((car: IVehicle) => {
            if (car.name === props.carName) {
                returnedVehicles.push(car);
                return returnedVehicles;
            }
        });
        return returnedVehicles;
    };

    return (
        <>
            {isHover ? (
                <div
                    style={{
                        width: props.width,
                    }}
                    className={
                        'd-flex flex-column justify-content-center align-items-center border border-1 p-1'
                    }
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CarImage width={props.width} />
                    <Name name={props.carName} isLarge={false} />
                    <ProgressBarCustom
                        width={props.barWidth}
                        energy={props.energy}
                        isProgressBardAnimated={isHover}
                    />
                    <div
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        <SearchInfoButton
                            value={'Check location'}
                            isSubmit={false}
                        />
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        width: props.width,
                    }}
                    className={
                        'd-flex flex-column justify-content-center align-items-center'
                    }
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CarImage width={props.width} />
                    <Name name={props.carName} isLarge={false} />
                    <ProgressBarCustom
                        width={props.barWidth}
                        energy={props.energy}
                        isProgressBardAnimated={isHover}
                    />
                </div>
            )}
        </>
    );
};
