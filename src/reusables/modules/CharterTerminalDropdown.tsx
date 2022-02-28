import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "..";
import { getTerminalApi } from "../../routes/api";
import { ReactComponent as NavigatorIcon } from "./../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../assets/svgs/location-outlined.svg";
import { PrimarySelectProps } from "../Input/types";

const CharterTerminalDropdown = ({
  filter = "air",
  isPickup = true,
  ...rest
}: { filter?: string; isPickup?: boolean } & Omit<
  PrimarySelectProps,
  "options"
>) => {
  const charterQuery = filter === "air" ? "/airport" : "/jetty";

  const { data = [] } = useQuery(charterQuery, async () => {
    const data = await getTerminalApi(charterQuery);
    return data;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const terminals = data.map((ele: any) => ({
    ...ele,
    value: ele.name,
    name: `${ele.address}, ${ele.state}, ${ele?.country}`,
  }));
  return (
    <PrimarySelect
      {...rest}
      options={terminals}
      icon={isPickup ? <NavigatorIcon /> : <LocationIcon />}
    />
  );
};

export default CharterTerminalDropdown;
