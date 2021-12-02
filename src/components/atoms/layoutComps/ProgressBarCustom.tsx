import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarCustom = (props: {
    width: string;
    energy: number;
    isProgressBardAnimated: boolean;
}) => {
    const [isAnimated, setIsAnimated] = useState(props.isProgressBardAnimated);

    return (
        <>
            {isAnimated ? (
                <div style={{ width: props.width }}>
                    <ProgressBar animated now={props.energy} />
                    <div className={'text-center'}>
                        <h5>{props.energy}%</h5>
                    </div>
                </div>
            ) : (
                <div style={{ width: props.width }}>
                    <ProgressBar now={props.energy} />
                    <div className={'text-center'}>
                        <h5>{props.energy}%</h5>
                    </div>
                </div>
            )}
        </>
    );
};
