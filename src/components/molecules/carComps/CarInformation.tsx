import React from 'react';
import { Name } from '../../atoms/layoutComps/Name';
import { IInfo } from '../../../types/types';
import { ListItemEnhanced } from '../listComps/ListItemEnhanced';
import { info } from 'console';

export const CarInformation = (props: { info: IInfo }) => {
    const { info } = props;
    return (
        <div className={'d-flex flex-row'}>
            <div className={'d-flex flex-column'}>
                <ListItemEnhanced
                    title={'status'}
                    subtitle={info.status}
                    isActive={true}
                    value={' '}
                />

                <ListItemEnhanced
                    title={'color'}
                    subtitle={info.color}
                    isActive={false}
                    value={undefined}
                />
                <ListItemEnhanced
                    title={'range km'}
                    subtitle={JSON.stringify(info.rangeKm)}
                    isActive={false}
                    value={undefined}
                />
            </div>

            <div className={'d-flex flex-column'}>
                <ListItemEnhanced
                    title={'discriminator'}
                    subtitle={info.discriminator}
                    isActive={false}
                    value={undefined}
                />

                <ListItemEnhanced
                    title={'plates number'}
                    subtitle={info.platesNumber}
                    isActive={false}
                    value={undefined}
                />
                <ListItemEnhanced
                    title={'side number'}
                    subtitle={info.sideNumber}
                    isActive={false}
                    value={undefined}
                />
            </div>

            {/* <div className={'d-flex flex-column'}>
            </div> */}
        </div>
    );
};
