import React from 'react';

export const FormSubmit = (props: { value: string }) => {
    return (
        <div className='col-auto'>
            <button type='submit' className='btn btn-primary mb-3'>
                {props.value}
            </button>
        </div>
    );
};
