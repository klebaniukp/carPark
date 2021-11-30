import { useState } from 'react';
import { Filter } from '../molecules/Filter';

export const Filters = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div
            onClick={() => {
                {
                    setIsChecked(!isChecked);
                }
            }}
        >
            <Filter isChecked={isChecked} />
        </div>
    );
};
