import React from "react";
import {
  CharterTypeDropdown,
  CustomCounter,
  CustomDurationInput,
  CustomGoogleAddress,
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
        <CustomCounter text="Guest" formik={formik} />
      </div>
      <div className="charter__content--form">
        <CustomGoogleAddress
          name="pickup"
          label="Pickup Location"
          iconType="navigator"
          formik={formik}
        />
        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" formik={formik} />
        ) : (
          <CustomGoogleAddress
            name="destination"
            label="Destination Terminal"
            iconType="location"
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
