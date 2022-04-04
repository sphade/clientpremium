/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "react-query";
import { useCharterPage } from "../../../hooks";
import { EmptyCard, Preloader } from "../../../reusables";
import { fetchCharter } from "../../../routes/api";
import AvailableCharter from "./AvailableCharter";

//Custom Imports
import LeftFilter from "./LeftFilter";
import TopFilter from "./TopFilter";

const CharterPage = () => {
  // Instantiate formik

  const { searchCharter, handleFilters, charterQuery, filter } =
    useCharterPage();
  const { formik } = searchCharter;

  const { isLoading, data = {} } = useQuery(
    ["fetchCharter", charterQuery, filter],
    async () => {
      let filterQuery = "?";

      filterQuery =
        filterQuery +
        Object.entries(filter)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

      const data = await fetchCharter({
        type: charterQuery,
        filters: filterQuery,
      });
      return data;
    }
  );

  const charter = data?.data || [];

  const emptyData = charter.length === 0;

  return (
    <div className="air-charter">
      <TopFilter formik={formik} handleFilters={handleFilters} />
      <div className="air-charter__content">
        <div className="flex center">
          <LeftFilter handleFilters={handleFilters} />
          {isLoading ? (
            <div>
              <Preloader />
            </div>
          ) : emptyData ? (
            <EmptyCard />
          ) : (
            <AvailableCharter searchCharter={searchCharter} charter={charter} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharterPage;
