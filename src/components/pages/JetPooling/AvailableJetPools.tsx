/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  PrimaryButton,
  PrimaryInput,
  DatePicker,
  CharterTerminalDropdown,
  DateRangeInput,
} from "../../../reusables";
import Plane from "../../../assets/images/plane-5.png";
import { ReactComponent as ArrowRight } from "./../../../assets/svgs/arrow-right-secondary.svg";
import { ReactComponent as CloseIcon } from "./../../../assets/svgs/close.svg";

import { PREMIUM_CHARTER_DATA } from "../Home/constants";
import { useDialogHook, useJetPooling } from "../../../hooks";
import JetPoolingDialog from "./JetPoolingDialog";
import JetpoolingCard from "./components/JetpoolingCard";
import HomeJetPoolingContainer from "../Home/Widgets/HomeJetPoolingContainer";
import { useQuery } from "react-query";
import { getJetPoolingList } from "../../../routes/api";

const AvailableJetPools = () => {
  const [filter, setFilter] = useState("air");

  const selectedFilter = PREMIUM_CHARTER_DATA.filter(
    (item) => item.type.toLowerCase() === filter
  );

  const onChange = (value: string) => {
    setFilter(value.toLowerCase());
  };

  const { formik, isDisabled, handleSubmit, data } = useJetPooling();

  const jetPoolings = data.data || [];

  return (
    <article className="jet-pooling__middleBar" id="jet-pool-content">
      <div className="searchBar__container">
        <p>
          Search for Empty leg filights going from your present location to your
          desired destination
        </p>
        <div className="searchBar ">
          <div className="searchBar__group flex gap-4 items-start flex-wrap lg:flex-nowrap ">
            <CharterTerminalDropdown
              name="from"
              label="Leaving from"
              formik={formik}
              // iconType="navigator"
            />
            <CharterTerminalDropdown
              formik={formik}
              name="to"
              label="Going to"
              // iconType="location"
            />
          </div>
          <div className="flex-none w-full">
            <DateRangeInput name="date" formik={formik} fullWidth />
          </div>
          <div className="flex gap-4 mt-8">
            <PrimaryButton
              label="Search"
              className="flex-none"
              onClick={handleSubmit}
              disabled={isDisabled}
            />
            {/* <OutlineButton label="Reset Filter" classes="!flex-none" small /> */}
          </div>
          <div className="reset__filter">
            <p>Reset Filter</p>
            <CloseIcon />
          </div>
        </div>
      </div>
      <h3 className="title">Available Jet Pools</h3>
      <div className="jet-pooling__cards">
        <HomeJetPoolingContainer jetPoolings={jetPoolings} />
      </div>
      <div className="private-jets__footer">
        <p className="private-jets__footer--sumary">Showing 4 from 12 Jets</p>
        <div className="private-jets__footer--buttons">
          <button>
            <span>{"<<"}</span>
            <span>Previous</span>
          </button>

          <div className="paginations">
            <h3 className="active">1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
          <button>
            <span>Next</span>
            <span>{">>"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default AvailableJetPools;
