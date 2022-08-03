/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomCounter,
  DatePicker,
  TripTypeDropdown,
} from '../../../../reusables';

import { ReactComponent as RoundTripIcon } from './../../../../assets/svgs/round-trip-icon.svg';
import { ReactComponent as SingleTripIcon } from './../../../../assets/svgs/single-trip-icon.svg';
import { ReactComponent as PlusIcon } from './../../../../assets/svgs/plus-icon.svg';
import { Divider } from '@mui/material';
import { flightNumber } from '../constants';
import { ICustomFormikProps } from '../../../../reusables/Input/types';

const AirCharterFilter = ({
  type,
  formik,
}: {
  type: string;
  formik: ICustomFormikProps;
}) => {
  const { setFieldValue, values } = formik;

  const { tripType = '', formNumber = [1] } = values;

  const isMultiCity = tripType?.toLowerCase() === 'multi-city';
  const isRoundTrip = tripType?.toLowerCase() === 'round trip';

  useEffect(() => {
    if (!isMultiCity) {
      setFieldValue('formNumber', [1]);
    }
  }, [tripType]);

  return (
    <>
      <div className='charter__content--select air-type'>
        <div>
          <TripTypeDropdown filter={type} formik={formik} />
          <CharterTypeDropdown filter={type} formik={formik} />
        </div>
        <CustomCounter text='Passenger' formik={formik} />
      </div>
      {formNumber.map((form: any, index: number) => {
        const numberIndex: string = (index + 1).toString();
        return (
          <article key={index}>
            {isMultiCity && index !== 0 && (
              <div style={{ margin: '1rem 0 2rem' }}>
                <Divider />
              </div>
            )}
            {isMultiCity && (
              <h3 style={{ margin: '1rem 0 2rem' }}>
                {flightNumber[numberIndex]} Flight{' '}
              </h3>
            )}
            <div className='charter__content--form'>
              <CharterTerminalDropdown
                filterKey='from'
                name={`${flightNumber[numberIndex].toLowerCase()}Pickup`}
                label='Leaving from'
                formik={formik}
              />
              <CharterTerminalDropdown
                name={`${flightNumber[numberIndex].toLowerCase()}Destination`}
                filterKey='to'
                label='Going to'
                formik={formik}
              />

              <div className='trip-icon'>
                {isRoundTrip ? <RoundTripIcon /> : <SingleTripIcon />}
              </div>
            </div>
            <div className='charter__content--form'>
              <DatePicker
                name={`${flightNumber[numberIndex].toLowerCase()}DepartureDate`}
                label='Departure Date'
                formik={formik}
              />
              <DatePicker
                name={`${flightNumber[numberIndex].toLowerCase()}ReturnDate`}
                label='Return Date'
                formik={formik}
              />
            </div>
          </article>
        );
      })}
      {isMultiCity && (
        <div className='add__flight'>
          <button
            className='add__flight--button'
            onClick={() => {
              const lastNumber = ++formNumber[formNumber.length - 1];
              setFieldValue('formNumber', [...formNumber, lastNumber]);
            }}
          >
            <PlusIcon />
            Add Another Flight
          </button>
        </div>
      )}
    </>
  );
};

export default AirCharterFilter;
