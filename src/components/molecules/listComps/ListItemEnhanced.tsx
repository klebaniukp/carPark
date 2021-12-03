import { useState } from 'react';
import { LiBadge } from '../../atoms/listComps/LiBadge';
import { ListTitling } from '../../atoms/listComps/ListTitling';

export const ListItemEnhanced = (props: {
    title: string;
    subtitle: string;
    isActive: boolean;
    value: string | undefined;
}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <>
            <ol
                className={`d-flex list-group list-group-numbered text-center align-items-center m-1`}
                style={{
                    fontSize: '1.7vh',
                }}
            >
                <div className={'d-flex flex-row'}>
                    {isHover ? (
                        <div
                            className={
                                'border border-2 rounded text-center align-middle p-1'
                            }
                            style={{
                                width: '10vw',
                                height: '10vh',
                                backgroundColor: '#e6e6e6',
                            }}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <ListTitling
                                title={props.title}
                                subtitle={props.subtitle}
                            />
                            <LiBadge
                                isActive={props.isActive}
                                value={props.value}
                            />
                        </div>
                    ) : (
                        <div
                            className={
                                'border border-2 rounded text-center align-middle p-1'
                            }
                            style={{ width: '10vw', height: '10vh' }}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <ListTitling
                                title={props.title}
                                subtitle={props.subtitle}
                            />
                            <LiBadge
                                isActive={props.isActive}
                                value={props.value}
                            />
                        </div>
                    )}
                </div>
            </ol>
        </>
    );
};

//list item with title, subtitle and (pill -> (build for status representation))
