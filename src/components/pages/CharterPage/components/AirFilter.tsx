import React from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";
import { ICustomFormikProps } from "../../../../reusables/Input/types";
import { useCheckCharterType } from "../../../../hooks";

const AirFilter = ({ formik }: { formik: ICustomFormikProps }) => {
  const { charterType } = useCheckCharterType();

  return (
    <>
      <div className="top-filter__content">
        <CharterTerminalDropdown
          name="pickup"
          label="Leaving from"
          formik={formik}
        />
        <CharterTerminalDropdown
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
          <CharterTypeDropdown filter={charterType} formik={formik} />
        </div>
      </div>
    </>
  );
};

export default AirFilter;
