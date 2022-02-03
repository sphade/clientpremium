import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useGlobalStoreProvider from "../../../../context";
import { UserReducerType } from "../../../../context/reducers/userReducer";
import { useAppStorage, useSteps } from "../../../../hooks";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import BaseModal from "../../../../reusables/BaseModal";
import { changeEmail } from "../../../../routes/api";
import { ProvideOtp } from "../../Wallet/components";
import EnterEmailModal from "./EnterEmailModal";

const ChangeEmailModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const { state, dispatch } = useGlobalStoreProvider();
  const [email, setEmail] = useState("");

  const steps = useSteps(2);

  // Get the current step
  const { currentStep, nextStep } = steps;

  // Get the correct step
  const stepIndex = currentStep - 1;

  const queryClient = useQueryClient();
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { MUTATE_USER } = UserReducerType;
  const { addToStore } = useAppStorage();

  const { mutate, isLoading } = useMutation(changeEmail, {
    onSuccess: async (data) => {
      const payload = {
        ...state.user,
        email,
      };
      dispatch({
        type: MUTATE_USER,
        payload,
      });
      await addToStore("user", payload);
      succesSnackbar(data.message || "Success");

      closeModal();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handleOtpRequest = (email: string) => {
    setEmail(email);
    nextStep();
  };

  const handleSubmit = (otp: string) => {
    mutate({
      email,
      otp,
    });
  };

  const views = [
    <EnterEmailModal key={2} steps={steps} handleChange={handleOtpRequest} />,
    <ProvideOtp
      key={3}
      steps={steps}
      isLoading={isLoading}
      details={{
        isModal: true,
        okText: "Change email",
        email,
        header: "Email Verification",
      }}
      handleSubmit={handleSubmit}
    />,
  ];

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="phoneNumber__modal">{views[stepIndex]}</div>
    </BaseModal>
  );
};

export default ChangeEmailModal;
