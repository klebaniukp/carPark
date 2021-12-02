import React from 'react';

export const ListTitling = (props: { title: string; subtitle: string }) => {
    return (
        <div className='ms-2 me-auto'>
            <div className='fw-bold'>{props.title}</div>
            {props.subtitle}
        </div>
    );
};
