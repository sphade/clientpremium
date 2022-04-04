/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "react-query";
import { PrimarySelect } from "../";
import useGlobalStoreProvider from "../../context";
import { CharterReducerActions } from "../../context/reducers/actions";
import { getTripTypeApi } from "../../routes/api";
import { ICustomFormikProps } from "../Input/types";

const { MUTATE_CHARTER } = CharterReducerActions;

const TripTypeDropdown = ({
  filter,
  handleChange,
  formik,
  handleFilters,
}: // handleFilters,
{
  filter: string;
  formik?: ICustomFormikProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (event: any) => void;
  handleFilters?: (filter: any) => void;
}) => {
  const { dispatch } = useGlobalStoreProvider();

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

  if (formik) {
    return (
      <PrimarySelect
        fullWidth={false}
        name="tripType"
        formik={formik}
        handleSelectChange={(data: any) => {
          const value = data;
          dispatch({ type: MUTATE_CHARTER, payload: { tripType: value } });
          handleFilters && handleFilters({ tripType: value });
        }}
        label="Trip Type"
        options={charterTypeSelect}
      />
    );
  }

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
