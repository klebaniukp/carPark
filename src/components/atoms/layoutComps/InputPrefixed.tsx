import { useState } from 'react';

export const InputPrefixed = (props: {
    firstValue: string;
    secondValue: string;
}) => {
    return (
        <div className='input-group'>
            <input type='number' className='form-control' />
            <span className='input-group-text'>{props.firstValue}</span>
        </div>
    );
};
