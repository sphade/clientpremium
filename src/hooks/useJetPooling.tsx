/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useQuery } from "react-query";
import { getJetPoolingValidation } from "../validations";
import { getJetPoolingList } from "../routes/api";
import { useState } from "react";

const useJetPooling = () => {
  // Initial Values
  let initialValues = {
    from: "",
    to: "",
    date: [new Date(), new Date()],
  };

  const [filter, setFilters] = useState<Record<string, any>>({});

  const { data = [], isLoading } = useQuery(
    ["getJetPoolings", filter],
    async () => {
      let filterQuery = "?";
      filterQuery =
        filterQuery +
        Object.entries(filter)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

      const data = await getJetPoolingList(filterQuery);

      return data;
    }
  );

  // Instantiate formik
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const { to, from, date } = values;

      const newDates = date.map((d) => new Date(d).toISOString());

      const newFrom = JSON.parse(from)?.id || "";
      const newTo = JSON.parse(to)?.id || "";

      const newFilter = {
        ...(newFrom && { from: newFrom }),
        ...(newTo && { to: newTo }),
        date: `${newDates[0]},${newDates[1]}`,
      };

      setFilters(newFilter);
    },
    validationSchema: getJetPoolingValidation,
  });

  const resetFilter = () => {
    setFilters({});
    console.log(filter);
    initialValues = {
      from: "",
      to: "",
      date: [new Date(), new Date()],
    };
    console.log(initialValues);
  };

  const { handleSubmit, isValid, dirty } = formik;

  const isDisabled = !(isValid && dirty);

  return {
    formik,
    isDisabled,
    handleSubmit,
    data,
    resetFilter,
    fetchingJetpooling: isLoading,
  };
};

export default useJetPooling;
