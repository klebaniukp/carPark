import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { CarMapComp } from '../carComps/CarMapComp';
import { useVehicleContext } from '../../../context/VehicleContext';
import { getVehicles } from '../../../services/getVehicles';
import { stringify } from 'querystring';
import { api_key } from '../../../constants/apiKey';

export const Map = () => {
    let API_KEY = api_key as string;
    const { mapVehicle, setMapVehicle } = useVehicleContext();
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    useEffect(() => {
        if (mapVehicle[0] === null) {
            getVehicles()
                .then((res) => {
                    console.log(res);
                    setMapVehicle(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

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
                    bootstrapURLKeys={{ key: API_KEY }}
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
