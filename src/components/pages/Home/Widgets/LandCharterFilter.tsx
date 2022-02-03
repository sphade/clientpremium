import React from "react";
import {
  CharterTypeDropdown,
  CustomCounter,
  CustomDurationInput,
  CustomTimePicker,
  DatePicker,
  CustomGoogleAddress,
} from "../../../../reusables";
import { ICustomFormikProps } from "../../../../reusables/Input/types";

const LandCharterFilter = ({
  type,
  formik,
}: {
  type: string;
  formik: ICustomFormikProps;
}) => {
  return (
    <>
      <div className="charter__content--select">
        <div>
          <CharterTypeDropdown filter={type} formik={formik} />
        </div>
        <CustomCounter text="Passenger" formik={formik} />
      </div>
      <div className="charter__content--form">
        <CustomGoogleAddress
          name="pickup"
          label="Pickup Location"
          iconType="navigator"
          formik={formik}
        />
        <CustomDurationInput
          isHour={false}
          label="Charter Duration"
          formik={formik}
        />
      </div>
      <div className="charter__content--form">
        <DatePicker
          name="departureDate"
          label="Pick-up Date"
          formik={formik}
          type="date"
        />
        <CustomTimePicker
          name="departureTime"
          label="Pick-up time"
          formik={formik}
        />
      </div>
    </>
  );
};

export default LandCharterFilter;
