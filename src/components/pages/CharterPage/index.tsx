/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import useGlobalStoreProvider from "../../../context";
import { useCheckCharterType } from "../../../hooks";
import { EmptyCard, Preloader } from "../../../reusables";
import { fetchCharter } from "../../../routes/api";
import { charterMappings } from "../../../utils";
import AvailableCharter from "./AvailableCharter";

//Custom Imports
import LeftFilter from "./LeftFilter";
import TopFilter from "./TopFilter";
import { CharterReducerActions } from "../../../context/reducers/actions";

const { MUTATE_CHARTER } = CharterReducerActions;

const CharterPage = () => {
  const { charterType } = useCheckCharterType();
  const { dispatch } = useGlobalStoreProvider();

  const location = useLocation();

  const { state: routerState = {} } = location;

  const [filter, setFilters] = useState<Record<string, any>>({});

  const charterQuery = charterMappings[charterType.toLowerCase()] || "";

  const handleFilters = (newFilter: any) => {
    setFilters({ ...filter, ...newFilter });
  };

  //Dispatch to the state
  useEffect(() => {
    console.log("here");
    if (!isEmpty(routerState)) {
      dispatch({ type: MUTATE_CHARTER, payload: routerState });
      const {
        transitType = "",
        passenger = "",
        // pickup = "",
        destination = "",
      } = routerState as Record<string, any>;
      setFilters({
        category: transitType,
        capacity: passenger,
        location: destination,
      });
    }
  }, [routerState]);

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
      <TopFilter handleFilters={handleFilters} />
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
