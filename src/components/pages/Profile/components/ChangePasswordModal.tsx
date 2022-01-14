import { useFormik } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import { PrimaryButton, PrimaryInput } from "../../../../reusables";
import BaseModal from "../../../../reusables/BaseModal";
import { changePassword } from "../../../../routes/api";
import { changePasswordValidation } from "../../../../validations";

const ChangePasswordEmail = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const queryClient = useQueryClient();
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { mutate, isLoading } = useMutation(changePassword, {
    onSuccess: async (data) => {
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
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      mutate(data);
    },
    validationSchema: changePasswordValidation,
  });

  const { handleSubmit } = formik;

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="phoneNumber__modal">
        <h3>Change Password</h3>
        <div>
          <PrimaryInput
            placeholder="Old Password"
            name="oldPassword"
            type="password"
            label="Old Password"
            formik={formik}
          />
          <PrimaryInput
            placeholder="New Password"
            name="newPassword"
            type="password"
            label="New Password"
            formik={formik}
          />
          <PrimaryInput
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            formik={formik}
          />
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

export default ChangePasswordEmail;
