import React from 'react';
import { Switch } from '../../atoms/filterComps/Switch';
import { Name } from '../../atoms/layoutComps/Name';

export const StatusFilter = (props: { isChecked: boolean; value: string }) => {
    return (
        <div
            className={
                'd-flex flex-row align-items-center align-center text-center justify-content-center '
            }
        >
            <Switch value={'status'} isChecked={props.isChecked} />
            <p style={{ margin: 0, padding: 0 }}>{props.value}</p>
        </div>
    );
};
