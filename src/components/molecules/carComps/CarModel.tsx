import { useState } from 'react';
import { CarImage } from '../../atoms/carComps/CarImage';
import { ProgressBarCustom } from '../../atoms/layoutComps/ProgressBarCustom';
import { Name } from '../../atoms/layoutComps/Name';

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
                        // backgroundColor: '#d9d9d9',
                    }}
                    className={
                        'd-flex flex-column justify-content-center align-items-center border border-1 p-1'
                    }
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CarImage width={props.width} />
                    <Name name={props.carName} isLarge={false} />
                    <ProgressBarCustom
                        width={props.barWidth}
                        energy={props.energy}
                        isProgressBardAnimated={isHover}
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
                    <ProgressBarCustom
                        width={props.barWidth}
                        energy={props.energy}
                        isProgressBardAnimated={isHover}
                    />
                </div>
            )}
        </>
    );
};
