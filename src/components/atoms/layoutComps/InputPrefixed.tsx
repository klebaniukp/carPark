import React from 'react';
import { useFiltersContext } from '../../../context/FiltersContext';

export const InputPrefixed = (props: { firstValue: string }) => {
    const { rangeKm, setRangeKm } = useFiltersContext();

    return (
        <div className='input-group'>
            <input
                type='number'
                className='form-control'
                min='0'
                value={rangeKm}
                onChange={(e) => {
                    const value = e.target as HTMLInputElement;
                    setRangeKm(value.valueAsNumber);
                }}
            />
            <span className='input-group-text'>{props.firstValue}</span>
            <span className='input-group-text'>min</span>
        </div>
    );
};
