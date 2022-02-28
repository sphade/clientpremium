import React from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomCounter,
  CustomDurationInput,
  CustomTimePicker,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";

import { ICustomFormikProps } from "../../../../reusables/Input/types";

const SeaCharterFilter = ({
  type,
  formik,
}: {
  type: string;
  formik: ICustomFormikProps;
}) => {
  const { values } = formik;

  const { tripType = "" } = values;

  const isBoatCruise = tripType === "boat cruise";
  ``;
  return (
    <>
      <div className="charter__content--select">
        <div>
          <TripTypeDropdown filter={type} formik={formik} />
          <CharterTypeDropdown filter={type} formik={formik} />
        </div>
        <CustomCounter text="Passenger" formik={formik} />
      </div>
      <div className="charter__content--form">
        <CharterTerminalDropdown
          name="pickup"
          label="Pickup Location"
          formik={formik}
        />

        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" formik={formik} />
        ) : (
          <CharterTerminalDropdown
            name="destination"
            label="Destination Terminal"
            formik={formik}
          />
        )}
      </div>
      <div className="charter__content--form">
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
    </>
  );
};

export default SeaCharterFilter;
