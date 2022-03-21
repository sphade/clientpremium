/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  PrimaryButton,
  CharterTerminalDropdown,
  DateRangeInput,
} from "../../../reusables";
import { ReactComponent as CloseIcon } from "./../../../assets/svgs/close.svg";

import { useJetPooling } from "../../../hooks";
import HomeJetPoolingContainer from "../Home/Widgets/HomeJetPoolingContainer";

const AvailableJetPools = () => {
  const {
    formik,
    isDisabled,
    fetchingJetpooling,
    handleSubmit,
    data,
    resetFilter,
  } = useJetPooling();

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
              useEvent={true}
            />
            <CharterTerminalDropdown
              formik={formik}
              name="to"
              label="Going to"
              useEvent={true}
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
            />
          </div>
          <div onClick={resetFilter} className="reset__filter">
            <p>Reset Filter</p>
            <CloseIcon />
          </div>
        </div>
      </div>
      <h3 className="title">Available Jet Pools</h3>
      <div className="jet-pooling__cards">
        <HomeJetPoolingContainer
          fetchingJetpooling={fetchingJetpooling}
          jetPoolings={jetPoolings}
        />
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
