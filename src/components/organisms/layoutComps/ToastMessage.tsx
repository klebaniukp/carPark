import React, { useState } from 'react';
import { Toast, Button } from 'react-bootstrap';
import { ToastParagraph } from '../../atoms/layoutComps/ToastParagraph';
import { IVehicle } from '../../../types/types';
import { useFiltersContext } from '../../../context/FiltersContext';

export const ToastMessage = (props: {
    showToast: boolean;
    vehicle: IVehicle;
}) => {
    const { isToast, setIsToast } = useFiltersContext();
    const { vehicle } = props;

    return (
        <>
            <div className='mb-2 md-6 col'>
                <Toast
                    show={isToast}
                    onClose={() => setIsToast(false)}
                    className={'bg-info'}
                    delay={6000}
                    autohide
                >
                    <Toast.Header>
                        <img
                            src='holder.js/20x20?text=%20'
                            className='rounded me-2'
                            alt=''
                        />
                        <strong className='me-auto'>Filters</strong>
                        <small>1 mins ago</small>
                    </Toast.Header>
                    <Toast.Body
                        style={{ fontSize: '1.6vh' }}
                        className={`d-flex flex-column align-items-center text-center justify-content-center`}
                    >
                        <ToastParagraph field={'Name'} value={vehicle.name} />
                        <ToastParagraph
                            field={'Plates Number'}
                            value={vehicle.platesNumber}
                        />
                        <ToastParagraph
                            field={'Side Number'}
                            value={vehicle.sideNumber}
                        />
                        <ToastParagraph field={'ID'} value={vehicle.id} />
                        <ToastParagraph
                            field={'Range [km]'}
                            value={vehicle.rangeKm.toString()}
                        />
                        <ToastParagraph
                            field={'Status'}
                            value={vehicle.status}
                        />
                        <ToastParagraph field={'Type'} value={vehicle.type} />
                        <ToastParagraph field={'Color'} value={vehicle.color} />
                        <ToastParagraph
                            field={'Discriminator'}
                            value={vehicle.discriminator}
                        />
                        <ToastParagraph
                            field={'Battery Level %'}
                            value={vehicle.batteryLevelPct.toString()}
                        />
                    </Toast.Body>
                </Toast>
            </div>
        </>
    );
};
