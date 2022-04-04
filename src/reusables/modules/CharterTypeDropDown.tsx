/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "..";
import useGlobalStoreProvider from "../../context";
import { getCharterTypeApi } from "../../routes/api";
import { charterMappings } from "../../utils";
import { ICustomFormikProps } from "../Input/types";
import { CharterReducerActions } from "../../context/reducers/actions";

const { MUTATE_CHARTER } = CharterReducerActions;

const CharterTypeDropdown = ({
  filter,
  formik,
  fullWidth = false,
  handleFilters,
}: {
  filter: string;
  fullWidth?: boolean;
  formik?: ICustomFormikProps;
  handleFilters?: (filter: any) => void;
}) => {
  const charterQuery = charterMappings[filter.toLowerCase()] || "";

  const { dispatch } = useGlobalStoreProvider();

  const { data = [] } = useQuery(charterQuery, async () => {
    const data = await getCharterTypeApi(charterQuery);
    return data;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const charterTypeSelect = data.map((ele: any) => ({
    ...ele,
    value: ele.name,
  }));

  const label =
    filter.toLowerCase() === "air"
      ? "Air craft type"
      : filter.toLowerCase() === "sea"
      ? "Boat Type"
      : "Car Type";

  if (formik) {
    return (
      <PrimarySelect
        fullWidth={fullWidth}
        formik={formik}
        handleSelectChange={(data: any) => {
          const value = data;
          dispatch({ type: MUTATE_CHARTER, payload: { transitType: value } });
          handleFilters && handleFilters({ category: value });
        }}
        name="transitType"
        label={label}
        options={charterTypeSelect}
      />
    );
  }
  return (
    <PrimarySelect
      fullWidth={false}
      name="transitType"
      label={label}
      options={charterTypeSelect}
    />
  );
};

export default CharterTypeDropdown;
