import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { CarMapComp } from '../carComps/CarMapComp';
import { useVehicleContext } from '../../../context/VehicleContext';

export const Map = () => {
    const API_KEY = 'AIzaSyDRrs1WNeJJaGa-KP_S-01wwSPY6dV85OE';
    const { mapVehicle } = useVehicleContext();

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    // if (mapVehicle[0] !== null) {
    //     setLongitude(mapVehicle[0].location.longitude);
    //     setLatitude(mapVehicle[0].location.latitude);
    // }

    useEffect(() => {
        console.log(`mapVehicle: ${mapVehicle[0].location?.latitude}`);
        if (
            mapVehicle[0].location?.latitude !== undefined &&
            mapVehicle[0].location?.longitude !== undefined
        ) {
            setLatitude(mapVehicle[0].location?.latitude);
            setLongitude(mapVehicle[0].location?.longitude);
        }
    }, []);

    const defaultProps = {
        center: {
            lat: 52.19351617,
            lng: 20.93042861,
        },
        zoom: 18,
        key: API_KEY,
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div
                style={{
                    height: '87vh',
                    width: '97vw',
                    left: '1.5vw',
                    bottom: '1.5vw',
                    position: 'absolute',
                }}
                className={''}
            >
                <GoogleMapReact
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    key={defaultProps.key}
                >
                    <CarMapComp
                        lat={latitude}
                        lng={longitude}
                        text='My Marker'
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};
