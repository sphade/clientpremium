import { TextFieldProps } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "..";
import { getTerminalApi } from "../../routes/api";
import { ReactComponent as NavigatorIcon } from "./../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../assets/svgs/location-outlined.svg";

const CharterTerminalDropdown = ({
  filter,
  isPickup = true,
  ...rest
}: { filter: string; isPickup?: boolean } & TextFieldProps) => {
  const charterQuery = filter === "air" ? "/airpot" : "/jetty";

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
      name="terminal"
      label={rest?.label || "Pick-up Location"}
      {...rest}
      options={terminals}
      icon={isPickup ? <NavigatorIcon /> : <LocationIcon />}
    />
  );
};

export default CharterTerminalDropdown;
