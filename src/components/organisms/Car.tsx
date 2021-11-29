import { useState } from 'react';
import { CarModel } from '../molecules/CarModel';

export const Car = () => {
    const [energy, setEnergy] = useState(67);

    return (
        <div className={'m-3'}>
            <CarModel width='11vw' barWidth={'10vw'} energy={energy} />
        </div>
    );
};
