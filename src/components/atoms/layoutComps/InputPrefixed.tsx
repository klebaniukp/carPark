import { useState } from 'react';

export const InputPrefixed = (props: { firstValue: string }) => {
    return (
        <div className='input-group'>
            <input type='number' className='form-control' min='0' />
            <span className='input-group-text'>{props.firstValue}</span>
            <span className='input-group-text'>min</span>
        </div>
    );
};
    