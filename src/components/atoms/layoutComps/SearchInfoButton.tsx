import React from 'react';

export const SearchInfoButton = (props: { value: string }) => {
    return (
        <button className='btn btn-outline-info' type='submit'>
            {props.value}
        </button>
    );
};
