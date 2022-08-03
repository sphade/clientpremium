/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";
import { ICustomFormikProps } from "../../../../reusables/Input/types";
import { useCheckCharterType } from "../../../../hooks";
import useGlobalStoreProvider from "../../../../context";
import { CharterReducerActions } from "../../../../context/reducers/actions";
import { flightNumber } from '../../Home/constants';

const { MUTATE_CHARTER } = CharterReducerActions;

const AirFilter = ({
  formik,
  handleFilters,
}: {
  formik: ICustomFormikProps;
  handleFilters?: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();
  const { dispatch } = useGlobalStoreProvider();
  
  return (
    <>
      <div className="top-filter__content">
        <CharterTerminalDropdown
          handleFilters={handleFilters}
          name={`${flightNumber['1'].toLowerCase()}Pickup`}
          label="Leaving from"
          filterKey="from"
          formik={formik}
        />
        <CharterTerminalDropdown
          handleFilters={handleFilters}
          name={`${flightNumber['1'].toLowerCase()}Destination`}
          label="Going to"
          filterKey="to"
          formik={formik}
        />
        <DatePicker
          name={`${flightNumber['1'].toLowerCase()}DepartureDate`}
          label="Departure Date"
          formik={formik}
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { departureDate: value },
            });
            handleFilters && handleFilters({ departureDate: value });
          }}
        />
        <DatePicker
          name={`${flightNumber['1'].toLowerCase()}ReturnDate`}
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { returnDate: value },
            });
            handleFilters && handleFilters({ returnDate: value });
          }}
          label="Return Date"
          formik={formik}
        />
      </div>
      <div className="top-filter__content">
        <div>
          <TripTypeDropdown filter={charterType} formik={formik} />
          <CharterTypeDropdown
            handleFilters={handleFilters}
            filter={charterType}
            formik={formik}
          />
        </div>
      </div>
    </>
  );
};

export default AirFilter;
