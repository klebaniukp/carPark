import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { SearchInfoButton } from '../../atoms/layoutComps/SearchInfoButton';
import { Filters } from './Filters';
import { useFiltersContext } from '../../../context/FiltersContext';
import { useVehicleContext } from '../../../context/VehicleContext';
import { IVehicle } from '../../../types/types';
import { getVehicles } from '../../../services/getVehicles';

export const ModalCustom = (props: { value: string }) => {
    const [show, setShow] = useState(false);
    const { status, batteryLevelPct, rangeKm } = useFiltersContext();
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let returnedVehicles: IVehicle[] = [];

        cars.map((car: IVehicle) => {
            // console.log(
            //     `battery level: ${
            //         car.batteryLevelPct
            //     }, expected battery level: ${batteryLevelPct}, typeof: ${typeof batteryLevelPct} , typeof: ${typeof car.batteryLevelPct}`
            // );
            if (
                ((car.status === 'AVAILABLE' && status === true) ||
                    (car.status !== 'AVAILABLE' && status === false)) &&
                car.batteryLevelPct >= batteryLevelPct &&
                car.rangeKm >= rangeKm
            ) {
                console.log(
                    `expectations: status: ${status}, batteryLevelPct: ${batteryLevelPct}, rangeKm: ${rangeKm}`
                );
                console.log(
                    `car added: ${car.name}, battery: ${car.batteryLevelPct}`
                );
                returnedVehicles.push(car);
            }

            handleClose();
            return returnedVehicles;
        });
        return returnedVehicles;
    };

    return (
        <>
            <div
                onClick={handleShow}
                style={{
                    height: '0.1vh',
                    margin: 0,
                    padding: 0,
                    marginTop: '0.7vh',
                }}
            >
                <SearchInfoButton value={props.value} isSubmit={false} />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.value}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Filters />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant='primary'
                        onClick={(e) => {
                            setVehicles(handleSubmit(e));
                        }}
                        type='submit'
                    >
                        Apply Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
