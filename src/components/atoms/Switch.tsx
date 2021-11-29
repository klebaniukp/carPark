import React from 'react';

export const Switch = (props: { value: string }) => {
    return (
        <div className='form-check form-switch'>
            <input
                className='form-check-input'
                type='checkbox'
                id='flexSwitchCheckChecked'
                checked
            />
            <label
                className='form-check-label'
                htmlFor='flexSwitchCheckChecked'
            >
                Checked switch checkbox input
            </label>
        </div>
    );
};
