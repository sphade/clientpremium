import React from "react";
import {
  DatePicker,
  OutlineButton,
  PrimaryButton,
  PrimaryInput,
} from "../../../reusables";
import JetpoolingCard from "../JetPooling/components/JetpoolingCard";

const HomeJetPooling = () => {
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
        <div className="searchBar bg-white pt-10 px-20 rounded-md space-y-10">
          <p>Search for specific jet pools</p>
          <div className="searchBar__group flex  gap-4 items-start flex-wrap lg:flex-nowrap ">
            <PrimaryInput
              name="Leaving"
              label="Leaving from"
              iconType="navigator"
            />
            <PrimaryInput name="Leaving" label="Going to" iconType="location" />
            <div className="flex-none ">
              <DatePicker name="departure" label="Departing" />
            </div>
            <PrimaryButton label="Search" className="flex-none" small />
            <OutlineButton label="Reset Filter" classes="!flex-none" small />
          </div>
        </div>
        <div className="jet-pooling__cards lg:justify-between !mt-10 flex-wrap lg:flex-nowrap justify-center">
          {[1, 2, 3, 4].map((item) => (
            <JetpoolingCard key={item} />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <PrimaryButton label="All jet pools" className="flex-none" />
        </div>
      </div>
    </div>
  );
};

export default HomeJetPooling;
