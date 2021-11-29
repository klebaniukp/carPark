import React from 'react';

export const Name = (props: { name: string; isLarge: boolean }) => {
    return (
        <div className={'text-center'}>
            {props.isLarge ? <h1>{props.name}</h1> : <h4>{props.name}</h4>}
        </div>
    );
};
