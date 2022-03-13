/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useQuery } from "react-query";
import { getJetPoolingValidation } from "../validations";
import { getJetPoolingList } from "../routes/api";
import { useState } from "react";

const useJetPooling = () => {
  // Initial Values
  const initialValues = {
    from: "",
    to: "",
    date: [new Date(), new Date()],
  };

  const [filter, setFilters] = useState<Record<string, any>>({});

  const { data = [] } = useQuery(["getJetPoolings", filter], async () => {
    let filterQuery = "?";
    filterQuery =
      filterQuery +
      Object.entries(filter)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    const data = await getJetPoolingList(filterQuery);

    return data;
  });

  // Instantiate formik
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { to, from, date } = values;

      const newFilter = {
        to,
        from,
        date: `${date[0]},${date[1]}`,
      };

      setFilters(newFilter);
    },
    validationSchema: getJetPoolingValidation,
  });

  const { handleSubmit, isValid, dirty } = formik;

  const isDisabled = !(isValid && dirty);

  return { formik, isDisabled, handleSubmit, data };
};

export default useJetPooling;
