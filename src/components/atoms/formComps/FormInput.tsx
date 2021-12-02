import React from 'react';

export const FormInput = (props: {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className='form-floating mb-3'>
            <input
                type={props.type}
                className='form-control'
                id='floatingInput'
                placeholder={props.value}
            />
            <label htmlFor='floatingInput'>{props.value}</label>
        </div>
    );
};

// To do list:
// Action to do onChange
