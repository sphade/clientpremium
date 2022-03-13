import React from "react";
import { Link } from "react-router-dom";
import { useJetPooling } from "../../../hooks";
import {
  CharterTerminalDropdown,
  DateRangeInput,
  OutlineButton,
  PrimaryButton,
} from "../../../reusables";
import { APP_ROUTES } from "../../../routes/path";
import HomeJetPoolingContainer from "./Widgets/HomeJetPoolingContainer";

const HomeJetPooling = () => {
  const { formik, isDisabled, handleSubmit, data } = useJetPooling();

  const jetPoolings = data.data || [];

  return (
    <div className="bg-black p-20">
      <div className="center">
        <div className="text-white mb-10">
          <h3 className="text-5xl">JET POOLING</h3>
          <p className="mt-4">
            Share flight with other travelers heading to the same destination
            and a reduced cost.
          </p>
        </div>
        <div className="searchBar bg-white pt-10 px-20 rounded-md space-y-10 md:space-y-0">
          <p className="mb-8"> Search for specific jet pools</p>
          <div className="searchBar__group flex  gap-4 items-start flex-wrap lg:flex-nowrap ">
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
            <DateRangeInput name="date" formik={formik} />
          </div>
          <div className="flex gap-4 flex-wrap  !mt-8 ">
            <PrimaryButton
              label="Search"
              className="flex-none"
              onClick={handleSubmit}
              disabled={isDisabled}
            />
            <OutlineButton label="Reset Filter" classes="!flex-none" small />
          </div>
        </div>
        <div className="jet-pooling__cards  !mt-10 flex-wrap lg:flex-nowrap !justify-center">
          <HomeJetPoolingContainer jetPoolings={jetPoolings} />
        </div>
        <div className="flex justify-center mt-20">
          <Link to={APP_ROUTES.jetPooling}>
            <PrimaryButton label="All jet pools" className="flex-none" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeJetPooling;
