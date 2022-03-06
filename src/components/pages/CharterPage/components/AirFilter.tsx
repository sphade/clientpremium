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

const AirFilter = ({
  formik,
  handleFilters,
}: {
  formik: ICustomFormikProps;
  handleFilters?: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();

  return (
    <>
      <div className="top-filter__content">
        <CharterTerminalDropdown
          handleFilters={handleFilters}
          name="pickup"
          label="Leaving from"
          formik={formik}
        />
        <CharterTerminalDropdown
          handleFilters={handleFilters}
          name="destination"
          label="Going to"
          formik={formik}
        />
        <DatePicker
          name="departureDate"
          label="Departure Date"
          formik={formik}
        />
        <DatePicker name="returnDate" label="Return Date" formik={formik} />
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
