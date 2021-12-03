import React from 'react';
import { NavbarBrand as Title } from '../../atoms/layoutComps/NavbarBrand';
import { Search } from '../../atoms/layoutComps/Search';
import { SearchInfoButton as SearchButton } from '../../atoms/layoutComps/SearchInfoButton';
import { NavbarInfoItem } from '../../molecules/LayoutComps/NavbarInfoItem';

export const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark sticky-top p-2'>
                <div className='container-fluid' style={{ color: 'white' }}>
                    <div className={'d-flex flex-row nav-item'}>
                        <Title brandName={'Car Park'} />
                        <NavbarInfoItem value={'Filter'} />
                    </div>
                    <div className={'d-flex flex-row nav-item'}>
                        <Search />
                        <SearchButton value={'Search'} />
                    </div>
                </div>
            </nav>
        </>
    );
};
