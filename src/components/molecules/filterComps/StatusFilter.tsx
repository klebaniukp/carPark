import React from 'react';
import { Switch } from '../../atoms/filterComps/Switch';
import { useFiltersContext } from '../../../context/FiltersContext';

export const StatusFilter = (props: { value: string }) => {
    const { status, setStatus } = useFiltersContext();

    return (
        <div
            className={
                'd-flex flex-row align-items-center align-center text-center justify-content-center '
            }
        >
            {status ? (
                <div onClick={() => setStatus(!status)}>
                    <Switch value={'status'} isChecked={status} />
                </div>
            ) : (
                <div onClick={() => setStatus(!status)}>
                    <Switch value={'status'} isChecked={status} />
                </div>
            )}
            <p style={{ margin: 0, padding: 0 }}>{props.value}</p>
        </div>
    );
};
