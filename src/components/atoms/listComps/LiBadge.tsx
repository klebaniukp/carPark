import { useState } from 'react';

export const LiBadge = (props: { isActive: boolean | undefined }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            {isActive ? (
                <span className='badge bg-succes rounded-pill'>status</span>
            ) : (
                <span className='badge bg-danger rounded-pill'>status</span>
            )}
        </>
    );
};

// badge for <li /> tag
