import React from 'react';

export const Name = (props: { name: string; isLarge: boolean }) => {
    return (
        <div className={'text-center'}>
            {props.isLarge ? (
                <div style={{ fontSize: '5vh' }}>
                    <p>{props.name}</p>
                </div>
            ) : (
                <div style={{ fontSize: '3vh' }}>
                    <p>{props.name}</p>
                </div>
            )}
        </div>
    );
};
