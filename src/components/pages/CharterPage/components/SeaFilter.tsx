import React from "react";
import {
  CharterTypeDropdown,
  CustomDurationInput,
  CustomGoogleAddress,
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
  handleFilters: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();

  const { values } = formik;

  const { tripType = "" } = values;

  const isBoatCruise = tripType === "boat cruise";

  return (
    <>
      <div className="top-filter__content">
        <CustomGoogleAddress
          name="pickup"
          label="Pickup Location"
          formik={formik}
        />
        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" formik={formik} />
        ) : (
          <CustomGoogleAddress
            name="destination"
            label="Destination Terminal"
            iconType="navigator"
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
