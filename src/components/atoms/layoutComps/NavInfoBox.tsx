import React from 'react';

export const NavInfoBox = (props: { opacity: string; value: string }) => {
    return (
        <div
            className={`nav-item vh-6 vw-10 text-decoration-none`}
            style={{
                opacity: props.opacity,
                color: 'white',
                marginTop: '0.5vh',
            }}
        >
            {props.value}
        </div>
    );
};
