import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { CarMapComp } from '../carComps/CarMapComp';

export const Map = () => {
    const defaultProps = {
        center: {
            lat: 52.19351617,
            lng: 20.93042861,
        },
        zoom: 18,
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
                >
                    <CarMapComp
                        lat={52.19351617}
                        lng={20.93042861}
                        text='My Marker'
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};
