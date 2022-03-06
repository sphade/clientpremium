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

const SeaFilter = ({
  formik,
  handleFilters,
}: {
  formik: ICustomFormikProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleFilters: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();

  const { values } = formik;

  const { tripType = "" } = values;

  const isBoatCruise = tripType === "boat cruise";

  return (
    <>
      <div className="top-filter__content">
        <CharterTerminalDropdown
          filter="sea"
          name="pickup"
          label="Pickup Location"
          formik={formik}
        />
        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" formik={formik} />
        ) : (
          <CharterTerminalDropdown
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
          type="date"
        />
        <CustomTimePicker
          name="departureTime"
          label="Departure time"
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
