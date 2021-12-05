import React from 'react';

export const ToastParagraph = (props: { field: string; value: string }) => {
    return (
        <p className={'border-bottom pt-2'} style={{ margin: 0, padding: 0 }}>
            {props.field + ': ' + props.value}
        </p>
    );
};
