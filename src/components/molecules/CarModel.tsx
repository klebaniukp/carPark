import { useState } from 'react';
import { CarImage } from '../atoms/CarImage';
import { ProgressBarCustom } from '../atoms/ProgressBarCustom';
import { Name } from '../atoms/Name';

export const CarModel = (props: {
    width: string;
    energy: number;
    barWidth: string;
    carName: string;
}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            {isHover ? (
                <div
                    style={{
                        width: props.width,
                        backgroundColor: '#d9d9d9',
                    }}
                    className={
                        'd-flex flex-column justify-content-center align-items-center '
                    }
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CarImage width={props.width} />
                    <Name name={props.carName} isLarge={false} />
                    <ProgressBarCustom
                        width={props.barWidth}
                        energy={props.energy}
                    />
                </div>
            ) : (
                <div
                    style={{
                        width: props.width,
                    }}
                    className={
                        'd-flex flex-column justify-content-center align-items-center'
                    }
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CarImage width={props.width} />
                    <Name name={props.carName} isLarge={false} />
                </div>
            )}
        </>
    );
};
