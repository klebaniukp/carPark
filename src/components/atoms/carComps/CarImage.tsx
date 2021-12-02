import React from 'react';
import carLogo from '../../../img/carLogo.png';

export const CarImage = (props: { width: string }) => {
    return (
        <img
            src={carLogo}
            alt='logo-car'
            style={{ width: props.width, marginBottom: '1vh' }}
        />
    );
};
