import React from 'react';
import { StatusFilter } from '../../molecules/filterComps/StatusFilter';
import { InputPrefixed } from '../../atoms/layoutComps/InputPrefixed';
import { BatteryLevelFilter } from '../../molecules/filterComps/BatteryLevelFilter';


export const Filters = () => {
    return (
            <div
                className={
                    'd-flex align-items-center text-center justify-content-cetner flex-column'
                }
                style={{ fontSize: '2.8vh' }}
            >
                <div style={{ padding: 0, margin: 0, marginBottom: '2vh' }}>
                    <StatusFilter value={'status'} />
                </div>
                <div style={{ padding: 0, margin: 0, marginBottom: '2vh' }}>
                    <BatteryLevelFilter />
                </div>
                <div
                    style={{
                        padding: 0,
                        margin: 0,
                        marginBottom: '1vh',
                        width: '20vw',
                    }}
                >
                    <InputPrefixed firstValue={'km'} />
                </div>
            </div>
    );
};
