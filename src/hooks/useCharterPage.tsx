/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { isEmpty, trim } from "lodash";
import { useLocation } from "react-router-dom";
import useGlobalStoreProvider from "../context";
import { CharterReducerActions } from "../context/reducers/actions";
import { charterMappings } from "../utils";
import useCheckCharterType from "./useCheckCharterType";
import useSearchCharter from "./useSearchCharter";
import { CHARTER_TYPE } from "../components/pages/Home/constants";
import { CharterType } from "./types";

const { MUTATE_CHARTER } = CharterReducerActions;

const useCharterPage = () => {
  const { dispatch } = useGlobalStoreProvider();

  const { charterType } = useCheckCharterType();

  // Instantiate formik
  const searchCharter = useSearchCharter({
    currentCharter: charterType.toLowerCase(),
    pushRoute: false,
  });

  const location = useLocation();

  const { state: routerState = {} } = location;

  const [filter, setFilters] = useState<Record<string, any>>({});

  const charterQuery = charterMappings[charterType.toLowerCase()] || "";

  const handleFilters = (newFilter: any) => {
    setFilters({ ...filter, ...newFilter });
  };

  //Dispatch to the state
  useEffect(() => {
    if (!isEmpty(routerState)) {
      dispatch({ type: MUTATE_CHARTER, payload: routerState });
      // console.log({ routerState });
      const {
        transitType = "",
        passenger = "",
        pickup = "",
        destination = "",
        state = "",
      } = routerState as Record<string, any>;

      setFilters({
        category: transitType,
        capacity: passenger,
        from: charterType === CharterType.LAND ? state : pickup,
        ...(destination && { to: destination }),
      });
    }
  }, [routerState]);

  return {
    charterQuery,
    searchCharter,
    handleFilters,
    filter,
  };
};

export default useCharterPage;
