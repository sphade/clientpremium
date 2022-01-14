import { useFormik } from "formik";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useGlobalStoreProvider from "../../../../context";
import { UserReducerType } from "../../../../context/reducers/userReducer";
import { useAppStorage } from "../../../../hooks";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import { CustomPhoneInput, PrimaryButton } from "../../../../reusables";
import BaseModal from "../../../../reusables/BaseModal";
import { changePhoneNumber } from "../../../../routes/api";
import { changePhoneValidation } from "../../../../validations";

const ChangePhoneNumberModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const { state, dispatch } = useGlobalStoreProvider();
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: async (values) => {
      const phone = `+${values.phone}`;
      const data = {
        phone,
      };

      setPhoneNumber(phone);

      mutate(data);
    },
    validationSchema: changePhoneValidation,
  });

  const { handleSubmit } = formik;

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="phoneNumber__modal">
        <h3>Change Phone Number</h3>
        <div className="content">
          <CustomPhoneInput formik={formik} name="phone" />
          <PrimaryButton
            isLoading={isLoading}
            onClick={handleSubmit}
            style={{ backgroundColor: "black" }}
            label="change phone number"
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default ChangePhoneNumberModal;
