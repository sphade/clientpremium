/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "..";
import { getTerminalApi } from "../../routes/api";
import { ReactComponent as NavigatorIcon } from "./../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../assets/svgs/location-outlined.svg";
import { PrimarySelectProps } from "../Input/types";
import useGlobalStoreProvider from "../../context";
import { CharterReducerActions } from "../../context/reducers/actions";
import { trim } from "lodash";

const { MUTATE_CHARTER } = CharterReducerActions;

const CharterTerminalDropdown = ({
  filter = "air",
  isPickup = true,
  handleFilters,
  ...rest
}: {
  filter?: string;
  isPickup?: boolean;
  useId?: boolean;
  handleFilters?: (filter: any) => void;
} & Omit<PrimarySelectProps, "options">) => {
  const charterQuery = filter === "air" ? "/airport" : "/jetty";

  const { dispatch } = useGlobalStoreProvider();

  const { data = [] } = useQuery(charterQuery, async () => {
    const data = await getTerminalApi(charterQuery);
    return data;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const terminals = data.map((ele: any) => {
    return {
      ...ele,
      value: ele.name,
      name: `${ele.address}, ${ele.state}, ${ele?.country}`,
    };
  });
  return (
    <PrimarySelect
      {...rest}
      handleSelectChange={(data: any) => {
        const value = data;
        if (isPickup) {
          const location = trim(data.split(",")[1] || "");
          const name = rest?.name;
          dispatch({ type: MUTATE_CHARTER, payload: { [name]: value } });
          handleFilters && handleFilters({ location: location });
        }
      }}
      options={terminals}
      icon={isPickup ? <NavigatorIcon /> : <LocationIcon />}
    />
  );
};

export default CharterTerminalDropdown;
