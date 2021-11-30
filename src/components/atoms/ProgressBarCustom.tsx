import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarCustom = (props: { width: string; energy: number }) => {
    return (
        <div style={{ width: props.width }}>
            <ProgressBar animated now={props.energy} />
            <div className={'text-center'}>
                <h5>{props.energy}%</h5>
            </div>
        </div>
    );
};
