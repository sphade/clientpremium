/* eslint-disable @typescript-eslint/no-explicit-any */
import { omit } from "lodash";
import { useMutation, useQueryClient } from "react-query";
import { useBookCharter, useRouterState } from ".";
import { PaymentMethodsEnum } from "../components/pages/Payment/types";
import { initializePayment } from "../routes/api";
import { PAYMENT_ENUM } from "../utils/constants";
import useCustomSnackbar from "./useSnackbar";

const { PAYSTACK, WALLET } = PaymentMethodsEnum;

const usePayment = () => {
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const queryClient = useQueryClient();

  const [routerState] = useRouterState();

  const { handleCharter, isLoading } = useBookCharter();

  const { mutate, isLoading: loadingPaystack } = useMutation(
    initializePayment,
    {
      onSuccess: async (data) => {
        // await addToStore("charter_details", data.data);

        const url = data.data.authorization_url;

        const newWindow = window.open(url, "_self", "");

        if (newWindow) {
          newWindow.onabort = () => {
            alert("ahaher");
          };
        }

        succesSnackbar(data.message || "Success");
      },
      onError: (error: any) => {
        errorSnackbar(error?.response?.data?.error || "Error");
      },
      onSettled: () => {
        queryClient.invalidateQueries("create");
      },
    }
  );

  const handlePayment = async (paymentMethod: string) => {
    const {
      pickup = "",
      departureDate = "",
      id = "",
      type = "",
      price = "",
      terminalId = "",
      destinationTerminalId = "",
      passengers = "",
      destination = "",
    } = routerState;
    const newPrice = Number(price);

    let metadata = {};

    if (type === PAYMENT_ENUM.JET_POOLING) {
      metadata = {
        id,
        price,
        passengers,
        type: PAYMENT_ENUM.JET_POOLING,
      };
    } else {
      metadata = {
        ...omit(routerState, ["passengers"]),
        destination,
        pickupLocation: pickup,
        pickupDate: departureDate,
        vehicleId: id,
        amount: newPrice,
        ...(terminalId && { terminalId }),
        ...(destinationTerminalId && { destinationTerminalId }),
      };
    }

    if (paymentMethod === PAYSTACK) {
      mutate({
        amount: newPrice * 100,
        metadata,
      });
    }

    if (paymentMethod === WALLET) {
      await handleCharter({
        verifyData: { metadata: { ...metadata, provider: "wallet" } },
      });
    }
  };

  return { handlePayment, loadingPaystack, isLoading };
};

export default usePayment;
