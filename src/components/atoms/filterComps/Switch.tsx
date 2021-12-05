import React from 'react';

export const Switch = (props: { value: string; isChecked: boolean }) => {
    return (
        <div
            className='d-flex flex-row align-items-center text-center justify-content-center form-check form-switch'
            // style={{ fontSize: '4vh' }}
        >
            {props.isChecked ? (
                <input
                    className='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckChecked'
                    checked
                />
            ) : (
                <input
                    className='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckChecked'
                />
            )}
        </div>
    );
};
