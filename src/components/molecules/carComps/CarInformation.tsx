import React from 'react';
import { Name } from '../../atoms/layoutComps/Name';
import { IInfo } from '../../../types/types';

export const CarInformation = (props: { info: IInfo }) => {
    return (
        <>
            <div
                className={
                    'd-flex flex-column align-items-center justify-content-center text-center card border-2 p-3 bg-light'
                }
                style={{ fontSize: '3vh', width: '70%', height: '40vh' }}
            >
                <p
                    className={
                        'd-flex flex-row text-center flex-wrap justify-content-between'
                    }
                >
                    <Name
                        name={`color: ${props.info.color} `}
                        isLarge={false}
                    />
                    <Name
                        name={`discriminator: ${props.info.discriminator}`}
                        isLarge={false}
                    />
                </p>

                <p
                    className={
                        'd-flex flex-row text-center flex-wrap justify-content-between'
                    }
                >
                    <Name name={`id: ${props.info.id} `} isLarge={false} />
                    <Name
                        name={`platesNumber: ${props.info.platesNumber}`}
                        isLarge={false}
                    />
                </p>

                <p
                    className={
                        'd-flex flex-row text-center flex-wrap justify-content-between'
                    }
                >
                    <Name
                        name={`rangeKm: ${JSON.stringify(props.info.rangeKm)} `}
                        isLarge={false}
                    />
                    <Name
                        name={`sideNumber: ${props.info.sideNumber}`}
                        isLarge={false}
                    />
                </p>
                <p
                    className={
                        'd-flex flex-row text-center flex-wrap justify-content-between'
                    }
                >
                    <Name
                        name={`status: ${props.info.status} `}
                        isLarge={false}
                    />
                    <Name name={`type: ${props.info.type}`} isLarge={false} />
                </p>
            </div>
        </>
    );
};
