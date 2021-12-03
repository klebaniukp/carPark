import { useState } from 'react';
import { NavInfoBox } from '../../atoms/layoutComps/NavInfoBox';

export const NavbarInfoItem = (props: { value: string }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div style={{ fontSize: '2.5vh', marginTop: '0.4vh' }}>
            {isHover ? (
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <NavInfoBox opacity={'0.8'} value={props.value} />
                </div>
            ) : (
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <NavInfoBox opacity={'0.4'} value={props.value} />
                </div>
            )}
        </div>
    );
};
