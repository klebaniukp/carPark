import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useVehicleContext } from '../../../context/VehicleContext';
import { useFiltersContext } from '../../../context/FiltersContext';
import { getVehicles } from '../../../services/getVehicles';
import { ToastMessage } from '../layoutComps/ToastMessage';
import { CarOnMap } from '../../molecules/carComps/CarOnMap';
import { CarMapComp } from '../carComps/CarMapComp';

export const Map = () => {
    let API_KEY = 'AIzaSyDOeVb2u9YHLIDtw359KuTt9sZx1bIPgB8';
    const { mapVehicle, setMapVehicle } = useVehicleContext();
    const { isToast, setIsToast } = useFiltersContext();
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
                    height: '93vh',
                    width: '100vw',
                    bottom: 0,
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
            {isToast ? (
                <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <ToastMessage showToast={isToast} vehicle={mapVehicle[0]} />
                </div>
            ) : (
                <> </>
            )}
        </div>
    );
};
