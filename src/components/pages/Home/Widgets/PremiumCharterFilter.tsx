import React from "react";
import { DatePicker, PrimaryButton, PrimaryInput } from "../../../../reusables";
import { charterPriceFilter, passengersFilter } from "../constants";
import { ReactComponent as SearchIcon } from "../../../../assets/svgs/search-icon.svg";
import CustomChips from "../../../../reusables/CustomChips/CustomChips";
import { Stack } from "@mui/material";

const PremiumCharterFilter = () => {
  return (
    <div className="premium__filter">
      <h3 className="premium__filter--title">Filters</h3>
      <div className="premium__filter--form">
        <label>By location</label>

        <PrimaryInput size="small" name="Leaving" endIcon={<SearchIcon />} />
        <label>By date of availability:</label>
        <DatePicker size="small" />

        <Stack gap="2rem">
          <CustomChips
            lists={passengersFilter}
            label="By number of passengers"
          />

          <CustomChips lists={charterPriceFilter} label="By charter price:" />
        </Stack>

        <PrimaryButton label="Apply Filters" />
      </div>
    </div>
  );
};

export default PremiumCharterFilter;
