import React from 'react';

export const SearchInfoButton = (props: {
    value: string;
    isSubmit: boolean;
}) => {
    return (
        <>
            {props.isSubmit ? (
                <button className='btn btn-outline-info' type='submit'>
                    {props.value}
                </button>
            ) : (
                <button className='btn btn-outline-info' type='button'>
                    {props.value}
                </button>
            )}
        </>
    );
};
