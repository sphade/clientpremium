import { useFormik } from "formik";
import {
  completeWalletWithdrawalApi,
  initializeWalletWithdrawalApi,
} from "../routes/api";
import { apiHandleErrorMessage } from "../utils";
import { withdrawalValidation } from "../validations";
import useCustomSnackbar from "./useSnackbar";
import useSteps from "./useSteps";
import useToggle from "./useToggle";

const useWithdrawal = () => {
  const [isLoading, toggleLoading] = useToggle();
  const steps = useSteps(3);
  const { currentStep, nextStep } = steps;

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  // Instantiate formik
  const formik = useFormik({
    initialValues: {
      amount: 0,
      bankCode: "",
      accountName: "",
      bankAccountNumber: "",
      narration: "Transfer",
    },
    onSubmit: async (values) => {
      toggleLoading();
      try {
        const data = { amount: Number(values?.amount || 0) };
        const response = await initializeWalletWithdrawalApi(data);
        succesSnackbar(response?.message || "");
        nextStep();
      } catch (error) {
        errorSnackbar(apiHandleErrorMessage({ error }));
      } finally {
        toggleLoading();
      }
    },
    validationSchema: withdrawalValidation,
  });

  const completeWithdrawal = async (otp: any) => {
    toggleLoading();
    const { values } = formik;
    try {
      const data = { ...values, amount: Number(values.amount), otp };
      const response = await completeWalletWithdrawalApi(data);
      succesSnackbar(response?.message || "");
      nextStep();
    } catch (error) {
      errorSnackbar(apiHandleErrorMessage({ error }));
    } finally {
      toggleLoading();
    }
  };

  return {
    formik,
    steps,
    isSubmitting: isLoading,
    completeWithdrawal,
  };
};

export default useWithdrawal;
