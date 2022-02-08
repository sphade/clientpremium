/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  CharterTypeDropdown,
  CustomDurationInput,
  CustomGoogleAddress,
  CustomTimePicker,
  DatePicker,
} from "../../../../reusables";
import { ICustomFormikProps } from "../../../../reusables/Input/types";
import { useCheckCharterType } from "../../../../hooks";

const LandFilter = ({
  formik,
  handleFilters,
}: {
  formik: ICustomFormikProps;
  handleFilters?: (filter: any) => void;
}) => {
  const { charterType } = useCheckCharterType();

  return (
    <>
      <div className="top-filter__content flex-wrap lg:flex-nowrap">
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
      <div className="top-filter__content">
        <div>
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

export default LandFilter;
