import React, { useEffect, useState } from 'react';
import { NavbarBrand as Title } from '../../atoms/layoutComps/NavbarBrand';
import { Search } from '../../atoms/layoutComps/Search';
import { SearchInfoButton as SearchButton } from '../../atoms/layoutComps/SearchInfoButton';
import { useVehicleContext } from '../../../context/VehicleContext';
import { searching } from '../../../services/searching';
import { getVehicles } from '../../../services/getVehicles';
import { ModalCustom } from '../filterComps/ModalCustom';

export const Navbar = () => {
    const { vehicles, setVehicles } = useVehicleContext();
    const [cars, setCars] = useState(vehicles);

    useEffect(() => {
        getVehicles()
            .then((res) => {
                setCars(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const form = document.querySelector('#search') as HTMLFormElement;
        const name = form.search.value.toLowerCase();
        console.log(searching(form, cars, name));
        setVehicles(() => searching(form, cars, name));
    };

    return (
        <>
            <nav className='navbar navbar-dark bg-dark fixed-top p-2'>
                <div className='container-fluid' style={{ color: 'white' }}>
                    <div className={'d-flex flex-row nav-item'}>
                        <Title brandName={'Car Park'} />
                        <ModalCustom value={'Filters'} />
                    </div>
                    <div className={'d-flex flex-row nav-item'}>
                        <form
                            action='/'
                            id='search'
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <div className={'d-flex flex-row'}>
                                <Search />
                                <SearchButton
                                    value={'Search'}
                                    isSubmit={true}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};
