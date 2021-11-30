import { useState } from 'react';
import { Name } from '../atoms/Name';
import { CarModel } from '../molecules/CarModel';
import { Filters } from './Filters';

export const SideBar = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div
                className={
                    'd-flex flex-column sticky-top float-end border-start w-25'
                }
                style={{ height: '100vh' }}
            >
                <div className={'border-bottom'}>
                    <Name name={'Cars / Filters'} isLarge={true} />
                </div>
                {/* <div className={'border-bottom'}>
                    <Filters />
                </div> */}
                {isHover ? (
                    <div
                        className={'bg-light'}
                        style={{ height: '20vh' }}
                        onMouseEnter={() => {
                            setIsHover(true);
                        }}
                        onMouseLeave={() => {
                            setIsHover(false);
                        }}
                    >
                        <CarModel
                            width={'24.5vw'}
                            energy={40}
                            barWidth={'20vw'}
                            carName={'Enigma Car'}
                        />
                        {/* <CarModel /> */}
                    </div>
                ) : (
                    <div
                        // className={'border-bottom'}
                        style={{ height: '20vh' }}
                        onMouseEnter={() => {
                            setIsHover(true);
                        }}
                        onMouseLeave={() => {
                            setIsHover(false);
                        }}
                    >
                        <CarModel
                            width={'24.5vw'}
                            energy={40}
                            barWidth={'20vw'}
                            carName={'Enigma Car'}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
