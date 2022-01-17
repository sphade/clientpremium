import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "..";
import { getCharterTypeApi } from "../../routes/api";
import { charterMappings } from "../../utils";

const CharterTypeDropdown = ({ filter }: { filter: string }) => {
  const charterQuery = charterMappings[filter.toLowerCase()] || "";

  const { data = [] } = useQuery(charterQuery, async () => {
    const data = await getCharterTypeApi(charterQuery);
    return data;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const charterTypeSelect = data.map((ele: any) => ({
    ...ele,
    value: ele.name,
  }));
  return (
    <PrimarySelect
      fullWidth={false}
      name="airCraftType"
      label={`${filter.toLowerCase()} craft type`}
      options={charterTypeSelect}
    />
  );
};

export default CharterTypeDropdown;
