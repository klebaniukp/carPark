import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarBrand = (props: { brandName: string }) => {
    return (
        <Link to='/' className={'navbar-brand'} style={{ fontSize: '3vh' }}>
            {props.brandName}
        </Link>
    );
};
