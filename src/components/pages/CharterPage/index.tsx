/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useCheckCharterType } from "../../../hooks";
import { EmptyCard, Preloader } from "../../../reusables";
import { fetchCharter } from "../../../routes/api";
import { charterMappings } from "../../../utils";
import AvailableCharter from "./AvailableCharter";

//Custom Imports
import LeftFilter from "./LeftFilter";
import TopFilter from "./TopFilter";

const CharterPage = () => {
  const { charterType } = useCheckCharterType();

  const [filter, setFilters] = useState<Record<string, any>>({});

  const charterQuery = charterMappings[charterType.toLowerCase()] || "";

  const handleFilters = (newFilter: any) => {
    setFilters({ ...filter, ...newFilter });
  };

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

  const charter = data?.aircrafts || data?.boats || data?.vehicles || [];

  const emptyData = charter.length === 0;

  return (
    <div className="air-charter">
      <TopFilter />
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
            <AvailableCharter charter={charter} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharterPage;
