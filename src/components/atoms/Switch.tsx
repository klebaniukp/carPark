import React from 'react';

export const Switch = (props: { value: string; isChecked: boolean }) => {
    return (
        <div className='form-check form-switch'>
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
            <label
                className='form-check-label'
                htmlFor='flexSwitchCheckChecked'
            >
                {props.value}
            </label>
        </div>
    );
};
