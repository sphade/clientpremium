import React, { useState } from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomTimePicker,
  DatePicker,
  PrimaryInput,
  PrimarySelect,
} from "../../../../reusables";

import { ReactComponent as DecrementIcon } from "./../../../../assets/svgs/decrement.svg";
import { ReactComponent as IncrementIcon } from "./../../../../assets/svgs/increment.svg";
import { ReactComponent as LocationIcon } from "./../../../../assets/svgs/location-outlined.svg";

import { BOAT_TYPE } from "../constants";

const SeaCharterFilter = ({ type }: { type: string }) => {
  const [guestCount, setguestCount] = useState(1);

  const increment = () => setguestCount(guestCount + 1);
  const decrement = () => {
    if (guestCount < 2) {
      return;
    }
    setguestCount(guestCount - 1);
  };
  return (
    <>
      <div className="charter__content--select">
        <div>
          <CharterTypeDropdown filter={type} />

          <PrimarySelect
            name="boatType"
            label="Boat type"
            fullWidth
            options={BOAT_TYPE}
          />
        </div>
        <div>
          <DecrementIcon onClick={decrement} />
          <p>
            {guestCount} {guestCount > 1 ? "Guest (s)" : "Guest"}
          </p>
          <IncrementIcon onClick={increment} />
        </div>
      </div>
      <div className="charter__content--form">
        <CharterTerminalDropdown filter={type} />
        <PrimaryInput
          name="Leaving"
          label="Cruise Duration"
          icon={<LocationIcon />}
        />
      </div>
      <div className="charter__content--form">
        <DatePicker label="Departure date" />
        <CustomTimePicker label="Departure time" />
      </div>
    </>
  );
};

export default SeaCharterFilter;
