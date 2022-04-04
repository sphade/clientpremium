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
import useGlobalStoreProvider from "../../../../context";
import { CharterReducerActions } from "../../../../context/reducers/actions";

const { MUTATE_CHARTER } = CharterReducerActions;

const LandFilter = ({
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
      <div className="top-filter__content flex-wrap lg:flex-nowrap">
        <CustomGoogleAddress
          name="pickup"
          label="Pickup Location"
          iconType="navigator"
          formik={formik}
          isPickup
          handleFilters={handleFilters}
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
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { departureDate: value },
            });
            handleFilters &&
              handleFilters({ date: new Date(value).toISOString() });
          }}
        />
        <CustomTimePicker
          name="departureTime"
          label="Pick-up time"
          formik={formik}
          handleSelectChange={(data: any) => {
            const value = data;
            dispatch({
              type: MUTATE_CHARTER,
              payload: { departureTime: value },
            });
          }}
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
