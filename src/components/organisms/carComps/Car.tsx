import React from 'react';
import { CarModel } from '../../molecules/carComps/CarModel';

export const Car = (props: {
    energy: number;
    carName: string;
    carWidth: string;
    barWidth: string;
}) => {
    return (
        <div className={'d-flex align-center justify-content-center'}>
            <CarModel
                width={props.carWidth} //e.g. '11vw'
                barWidth={props.barWidth} //e.g. '10vw'
                energy={props.energy}
                carName={props.carName}
            />
        </div>
    );
};
