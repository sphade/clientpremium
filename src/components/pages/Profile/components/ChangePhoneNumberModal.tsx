import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useGlobalStoreProvider from "../../../../context";
import { UserReducerType } from "../../../../context/reducers/userReducer";
import { useAppStorage, useSteps } from "../../../../hooks";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import BaseModal from "../../../../reusables/BaseModal";
import { changePhoneNumber } from "../../../../routes/api";
import { ProvideOtp } from "../../Wallet/components";
import EnterPhoneNumberModal from "./EnterPhoneNumberModal";

const ChangePhoneNumberModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const { state, dispatch } = useGlobalStoreProvider();
  const [phoneNumber, setPhoneNumber] = useState("");

  const steps = useSteps(2);

  // Get the current step
  const { currentStep, nextStep } = steps;

  // Get the correct step
  const stepIndex = currentStep - 1;

  const queryClient = useQueryClient();
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { MUTATE_USER } = UserReducerType;
  const { addToStore } = useAppStorage();

  const { mutate, isLoading } = useMutation(changePhoneNumber, {
    onSuccess: async (data) => {
      const payload = {
        ...state.user,
        phone: phoneNumber,
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

  const handleOtpRequest = (value: string) => {
    setPhoneNumber(`+${value}`);
    nextStep();
  };

  const handleSubmit = (otp: string) => {
    mutate({
      phone: phoneNumber,
      otp,
    });
  };

  const views = [
    <EnterPhoneNumberModal
      key={2}
      steps={steps}
      handleChange={handleOtpRequest}
    />,
    <ProvideOtp
      key={3}
      steps={steps}
      isLoading={isLoading}
      details={{ isModal: true, okText: "Change Phone Number", phoneNumber }}
      handleSubmit={handleSubmit}
    />,
  ];

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="phoneNumber__modal">{views[stepIndex]}</div>
    </BaseModal>
  );
};

export default ChangePhoneNumberModal;
