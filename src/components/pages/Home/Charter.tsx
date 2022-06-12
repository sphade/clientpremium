import React, { useState } from 'react';
import { PrimaryButton, CustomAlert, Tabpane } from '../../../reusables';
import { useSearchCharter } from '../../../hooks';
import { ECharterType } from './types';
import AirCharterFilter from './Widgets/AirCharterFilter';
import LandCharterFilter from './Widgets/LandCharterFilter';
import SeaCharterFilter from './Widgets/SeaCharterFilter';

const Charter = () => {
  const [currentCharter, setCurrentCharter] = useState('air');

  const onTabChange = (value: string) => {
    const charterType = value.split(' ')[0].toLocaleLowerCase();
    setCurrentCharter(charterType);
  };

  // Instantiate formik
  const { formik, isDisabled, handleSubmit } = useSearchCharter({
    currentCharter,
  });

  return (
    <div className='charter' id='find-charter'>
      <div className='center'>
        <CustomAlert
          hasIcon
          header='Trip Charter Time'
          content={[
            ' All charter activities should be made at least 24 hours before pick up time.',
          ]}
        />

        <div className='charter__content'>
          <h3 className='charter__content--header'>Find Charters</h3>
          <Tabpane
            onChange={onTabChange}
            list={['Air Charter', 'Sea Charter', 'Land Charter']}
          />
          <div>
            {currentCharter === ECharterType.air && (
              <AirCharterFilter type={currentCharter} formik={formik} />
            )}
            {currentCharter === ECharterType.land && (
              <LandCharterFilter type={currentCharter} formik={formik} />
            )}
            {currentCharter === ECharterType.sea && (
              <SeaCharterFilter type={currentCharter} formik={formik} />
            )}
          </div>

          <div className='action__button'>
            <PrimaryButton
              type='submit'
              disabled={isDisabled}
              label='search'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charter;
