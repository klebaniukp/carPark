import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarCustom = (props: {
    width: string;
    energy: number;
    isProgressBardAnimated: boolean;
}) => {
    return (
        <div style={{ fontSize: '2.5vh' }}>
            {props.isProgressBardAnimated ? (
                <div style={{ width: props.width }}>
                    <ProgressBar animated now={props.energy} />
                    <div className={'text-center'}>
                        <p>{props.energy}%</p>
                    </div>
                 </div>
            ) : (
                <div style={{ width: props.width }}>
                    <ProgressBar now={props.energy} />
                    <div className={'text-center'}>
                        <p>{props.energy}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};
