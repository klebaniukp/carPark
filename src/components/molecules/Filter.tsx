import React from 'react';
import { Switch } from '../atoms/Switch';

export const Filter = (props: {isChecked: boolean}) => {
    return (
        <>
            <Switch value={'Status'} isChecked={props.isChecked}/>
        </>
    );
};
