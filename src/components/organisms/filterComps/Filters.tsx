import { useState } from 'react';
import { StatusFilter } from '../../molecules/filterComps/StatusFilter';
import { ProgressBarCustom } from '../../atoms/layoutComps/ProgressBarCustom';
import { FormInput } from '../../atoms/formComps/FormInput';
import { InputPrefixed } from '../../atoms/layoutComps/InputPrefixed';

export const Filters = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [kmValue, setKmValue] = useState(0);

    return (
        <div
            className={
                'd-flex align-items-center text-center justify-content-cetner flex-column'
            }
            style={{ fontSize: '2.8vh' }}
        >
            <div
                onClick={() => setIsChecked(!isChecked)}
                style={{ padding: 0, margin: 0, marginBottom: '2vh' }}
                // className={'m-2'}
            >
                <StatusFilter isChecked={isChecked} value={'status'} />
            </div>
            <div style={{ padding: 0, margin: 0, marginBottom: '2vh' }}>
                <ProgressBarCustom
                    width={'20vw'}
                    energy={45}
                    isProgressBardAnimated={true}
                />
            </div>
            <div
                style={{
                    padding: 0,
                    margin: 0,
                    marginBottom: '0vh',
                }}
            >
                <InputPrefixed firstValue={'km'} secondValue={'0'} />
            </div>
        </div>
    );
};
