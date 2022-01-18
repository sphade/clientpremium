import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "../";
import { getTripTypeApi } from "../../routes/api";

const TripTypeDropdown = ({ filter }: { filter: string }) => {
  const { data = [] } = useQuery(filter.toLowerCase(), async () => {
    const data = await getTripTypeApi(filter.toLowerCase());
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
      name="tripType"
      label="Trip Type"
      options={charterTypeSelect}
    />
  );
};

export default TripTypeDropdown;
