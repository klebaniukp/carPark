import { useState, useEffect } from 'react';
import { CarModel } from '../molecules/CarModel';

export const Car = (props: { energy: number; carName: string }) => {
    const [energy, setEnergy] = useState(0);

    useEffect(() => {
        setEnergy(props.energy);
    }, []);

    return (
        <div className={'m-3'}>
            <CarModel
                width='11vw'
                barWidth={'10vw'}
                energy={energy}
                carName={props.carName}
            />
        </div>
    );
};
