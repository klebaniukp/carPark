import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useFiltersContext } from '../../../context/FiltersContext';

export const BatteryLevelFilter = () => {
    const { batteryLevelPct, setBatteryLevelPct } = useFiltersContext();

    return (
        <div>
            <div
                style={{ padding: 0, margin: 0, marginBottom: '1vh' }}
                id='percentage'
            >
                <div className='input-group'>
                    <input
                        min='0'
                        max='100'
                        type='number'
                        value={batteryLevelPct}
                        className='form-control'
                        onChange={(e: React.SyntheticEvent) => {
                            const value = (e.currentTarget as HTMLInputElement)
                                .value;
                            setBatteryLevelPct(parseInt(value));
                        }}
                    />
                    <span className='input-group-text'>%</span>
                    <span className='input-group-text'>min</span>
                </div>
            </div>
            <ProgressBar
                animated
                now={batteryLevelPct}
                style={{ width: '20vw' }}
            />
        </div>
    );
};
