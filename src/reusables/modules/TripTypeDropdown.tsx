import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "../";
import { getTripTypeApi } from "../../routes/api";

const TripTypeDropdown = ({
  filter,
  handleChange,
}: {
  filter: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (event: any) => void;
}) => {
  const { data = [] } = useQuery(
    `${filter.toLowerCase()}_trip_type`,
    async () => {
      const data = await getTripTypeApi(filter.toLowerCase());
      return data;
    }
  );

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
      onChange={handleChange}
      options={charterTypeSelect}
    />
  );
};

export default TripTypeDropdown;
