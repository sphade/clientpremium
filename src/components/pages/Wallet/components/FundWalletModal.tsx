import React from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import { PrimaryButton, PrimaryInput } from "../../../../reusables";
import BaseModal from "../../../../reusables/BaseModal";
import { initializePayment } from "../../../../routes/api";
import { fundWalletValidation } from "../../../../validations";

const FundWalletModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const queryClient = useQueryClient();
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { mutate, isLoading: postLoading } = useMutation(initializePayment, {
    onSuccess: async (data) => {
      // await addToStore("charter_details", data.data);

      const url = data.data.link;

      const newWindow = window.open(url, "_self", "");

      if (newWindow) {
        newWindow.onabort = () => {
          alert("ahaher");
        };
      }

      succesSnackbar(data.message || "Success");
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
      amount: "",
    },
    onSubmit: async () => {
      const newPrice = Number(3000);

      const metadata = {
        type: "wallet",
        redirect: "localhost:3000//walletFunded",
        amount: newPrice,
      };

      mutate({
        amount: newPrice,
        metadata,
      });
    },
    validationSchema: fundWalletValidation,
  });

  const { handleSubmit } = formik;

  return (
    <BaseModal maxWidth="sm" open={openModal} onClose={closeModal}>
      <div className="flex flex-col gap-8 items-center !w-full pt-6">
        <h3 className="font-bold uppercase text-4xl">Fund Wallet</h3>
        <PrimaryInput
          placeholder="Amount"
          name="amount"
          type="amount"
          label="Amount"
          formik={formik}
        />
        <PrimaryButton
          isLoading={postLoading}
          classes="-mt-10"
          onClick={handleSubmit}
          style={{ backgroundColor: "black" }}
          label="Fund Wallet"
        />
      </div>
    </BaseModal>
  );
};

export default FundWalletModal;
