/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  PrimaryButton,
  CharterTerminalDropdown,
  DateRangeInput,
} from "../../../reusables";
import { ReactComponent as CloseIcon } from "./../../../assets/svgs/close.svg";
import ReactPaginate from "react-paginate";
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
  const totalPages = data.totalPages || 1;
  const currentPage = data.currentPage || 1;
  const handlePageClick = (selectedItem: { selected: number }) => {
    console.log(selectedItem.selected);
  };
  return (
    <article className="jet-pooling__middleBar" id="jet-pool-content">
      <div className="searchBar__container">
        <p>
          Search for Empty leg flights going from your present location to your
          desired destination
        </p>
        <div className="searchBar ">
          <div className="searchBar__group flex gap-4 items-start flex-wrap lg:flex-nowrap ">
            <CharterTerminalDropdown
              filterKey="from"
              name="from"
              label="Leaving from"
              formik={formik}
              useEvent={true}
            />
            <CharterTerminalDropdown
              filterKey="to"
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
        <p className="private-jets__footer--sumary"></p>
        <div className="private-jets__footer--buttons">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >>"
            onPageActive={handlePageClick}
            disabledLinkClassName="opacity-20 "
            pageCount={totalPages}
            previousLabel="<< previous"
            containerClassName="  flex items-center"
            activeLinkClassName="bg-black text-white rounded-2xl"
            pageLinkClassName="p-5 m-3 px-10 hover:bg-gray-900 hover:text-white duration-150 ease rounded-2xl"
            previousLinkClassName="p-5   border-black border-2 text-black duration-150 ease  mr-5 rounded-2xl hover:bg-black hover:text-white"
            nextLinkClassName="p-5 border-black border-2 text-black duration-150 ease ml-5 rounded-2xl hover:bg-black hover:text-white"
          />
        </div>
      </div>
    </article>
  );
};

export default AvailableJetPools;
