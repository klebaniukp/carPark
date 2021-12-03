import { useState } from 'react';

export const LiBadge = (props: {
    isActive: boolean | undefined;
    value: string | undefined;
}) => {
    return (
        <>
            {props.isActive ? (
                <span className='badge bg-success rounded-pill'>
                    {props.value}
                </span>
            ) : (
                <span className='badge bg-danger rounded-pill'>
                    {props.value}
                </span>
            )}
        </>
    );
};

// badge for <li /> tag
