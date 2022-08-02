/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomDurationInput,
  CustomTimePicker,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";

import { ICustomFormikProps } from "../../../../reusables/Input/types";
import { useCheckCharterType } from "../../../../hooks";
import useGlobalStoreProvider from "../../../../context";
import { CharterReducerActions } from "../../../../context/reducers/actions";

const { MUTATE_CHARTER } = CharterReducerActions;

const SeaFilter = ({
  formik,
  handleFilters,
}: {
  formik: ICustomFormikProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleFilters: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();

  const { dispatch } = useGlobalStoreProvider();

  const { values } = formik;

  const { tripType = "" } = values;

  const isBoatCruise = tripType === "boat cruise";

  return (
    
    <>
      <div className="top-filter__content">
        <CharterTerminalDropdown
          handleFilters={handleFilters}
          filterKey="from"
          filter="sea"
          name="pickup"
          label="Pickup Location"
          formik={formik}
        />
        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" formik={formik} />
        ) : (
          <CharterTerminalDropdown
            handleFilters={handleFilters}
            filterKey="to"
            filter="sea"
            name="destination"
            label="Destination Terminal"
            formik={formik}
          />
        )}
        <DatePicker
          name="departureDate"
          label="Departure Date"
          formik={formik}
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { departureDate: value },
            });
            // handleFilters &&
            //   handleFilters({ date: new Date(value).toISOString() });
          }}
          type="date"
        />
        <CustomTimePicker
          name="departureTime"
          label="Departure time"
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { departureTime: value },
            });
          }}
          formik={formik}
        />
      </div>
      <div className="top-filter__content">
        <div>
          <TripTypeDropdown
            handleFilters={handleFilters}
            filter={charterType}
            formik={formik}
          />
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

export default SeaFilter;
