import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export const BatteryLevelFilter = () => {
    const [percentage, setPercentage] = useState(23);

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
                        value={percentage}
                        className='form-control'
                        onChange={(e: React.SyntheticEvent) => {
                            const value = (e.currentTarget as HTMLInputElement)
                                .value;
                            setPercentage(parseInt(value));
                        }}
                    />
                    <span className='input-group-text'>%</span>
                    <span className='input-group-text'>min</span>
                </div>
            </div>
            <ProgressBar
                animated
                now={percentage}
                style={{ width: '20vw' }}
            />
        </div>
    );
};
