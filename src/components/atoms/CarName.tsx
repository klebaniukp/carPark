import React from 'react';

export const CarName = (props: { name: string }) => {
    return (
        <div className={'text-center'}>
            <h4>{props.name}</h4>
        </div>
    );
};
