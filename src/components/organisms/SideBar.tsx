import React from 'react';
import { Name } from '../atoms/Name';

export const SideBar = () => {
    return (
        <>
            <div
                className={
                    'd-flex flex-column sticky-top float-end border-start w-25'
                }
                style={{ height: '100vh' }}
            >
                <div className={'border-bottom'}>
                    <Name name={'Information'} isLarge={true} />
                </div>

                {/* <div
                // className={'vw-30 vh-100'}
                >
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                    fds <br />
                </div> */}
            </div>
        </>
    );
};
