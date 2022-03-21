/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { APP_ROUTES } from "../routes/path";
import { charterValidation } from "../validations";
import { TCharter } from "../validations/types";

const useSearchCharter = ({
  currentCharter,
  initialValues = {},
}: {
  currentCharter: string;
  initialValues?: Record<string, any>;
}) => {
  const history = useHistory();

  // Instantiate formik
  const formik = useFormik({
    initialValues: {
      pickup: "",
      destination: "",
      departureDate: "",
      departureTime: "",
      returnDate: "",
      passenger: 1,
      tripType: "",
      transitType: "",
      duration: 1,
      ...initialValues,
    },
    onSubmit: async (values) => {
      history.push(APP_ROUTES.charter(currentCharter), {
        ...values,
        charterType: currentCharter,
      });
    },
    validationSchema: charterValidation({ type: currentCharter as TCharter }),
  });

  const { handleSubmit, isValid, dirty, values } = formik;

  const isDisabled = !(isValid && dirty);

  return { formik, isDisabled, handleSubmit };
};

export default useSearchCharter;
