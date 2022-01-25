import React from "react";
import {
  CharterTypeDropdown,
  CustomCounter,
  CustomDurationInput,
  CustomTimePicker,
  DatePicker,
  CustomGoogleAddress,
} from "../../../../reusables";

const LandCharterFilter = ({ type }: { type: string }) => {
  return (
    <>
      <div className="charter__content--select">
        <div>
          <CharterTypeDropdown filter={type} />
        </div>
        <CustomCounter text="Passenger" />
      </div>
      <div className="charter__content--form">
        <CustomGoogleAddress name="pickup-location" label="Pickup Location" />
        <CustomDurationInput isHour={false} label="Charter Duration " />
      </div>
      <div className="charter__content--form">
        <DatePicker label="Pick-up date" />
        <CustomTimePicker label="Pick-up time" />
      </div>
    </>
  );
};

export default LandCharterFilter;
