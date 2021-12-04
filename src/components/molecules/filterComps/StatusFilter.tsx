import { useState } from 'react';
import { Switch } from '../../atoms/filterComps/Switch';

export const StatusFilter = (props: { value: string }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div
            className={
                'd-flex flex-row align-items-center align-center text-center justify-content-center '
            }
        >
            {isChecked ? (
                <div onClick={() => setIsChecked(!isChecked)}>
                    <Switch value={'status'} isChecked={isChecked} />
                </div>
            ) : (
                <div onClick={() => setIsChecked(!isChecked)}>
                    <Switch value={'status'} isChecked={isChecked} />
                </div>
            )}
            <p style={{ margin: 0, padding: 0 }}>{props.value}</p>
        </div>
    );
};
