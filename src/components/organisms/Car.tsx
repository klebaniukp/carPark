import { useState } from 'react';
import { CarModel } from '../molecules/CarModel';

export const Car = () => {
    const [energy, setEnergy] = useState(80);

    return (
        <div className={'m-3'}>
            <CarModel
                width='11vw'
                barWidth={'10vw'}
                energy={energy}
                carName={'audi A7'}
            />
        </div>
    );
};
