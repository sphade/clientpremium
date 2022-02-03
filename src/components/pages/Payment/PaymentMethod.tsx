/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { capitalize } from "lodash";

import { Preloader, PrimaryButton } from "../../../reusables";
// import { APP_ROUTES } from "../../../routes/path";

import WalletLogo from "../../../assets/images/wallet.png";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPaymentMethodsApi, initializePayment } from "../../../routes/api";
import useCustomSnackbar from "../../../hooks/useSnackbar";
import { PaymentMethodsEnum } from "./types";
import { useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/path";
import { useRouterState } from "../../../hooks";
// import { useAppStorage } from "../../../hooks";

const { PAYSTACK, FLUTTER_WAVE } = PaymentMethodsEnum;

const PaymentMethod = () => {
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState(PAYSTACK);

  const [routerState] = useRouterState();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const queryClient = useQueryClient();

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
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const handlePayment = () => {
    const {
      pickup = "",
      departureDate = "",
      id = "",
      type = "",
      // price = "",
      terminalId = "",
      destinationTerminalId = "",
    } = routerState;
    if (paymentMethod === FLUTTER_WAVE) {
      const newPrice = Number(3000);

      const metadata = {
        ...routerState,
        destination: "Ikeja, Lagos",
        pickupLocation: pickup,
        pickupDate: departureDate,
        vehicleId: id,
        amount: newPrice,
        ...(terminalId && { terminalId }),
        ...(destinationTerminalId && { destinationTerminalId }),
      };

      mutate({
        amount: newPrice,
        metadata,
      });
    } else {
      history.push(APP_ROUTES.getBookedPage({ type, id }));
    }
  };

  const {
    isLoading,
    error,
    data: paymentMethods = [],
  } = useQuery("fetchPaymentMethods", async () => {
    const data = await getPaymentMethodsApi();
    return data;
  });

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h3>Error Fetching</h3>;
  }

  return (
    <article className="payment-method">
      <div className="payment-method__container">
        <div className="payment-method__container--card">
          <div className="card__title">
            <h3>PAYMENT METHOD</h3>
            <p>Salect a payment method below</p>
          </div>
          <div className="card__options">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={"title"}
                onChange={(e: any) => setPaymentMethod(e.target.value)}
                defaultValue={paymentMethod}
                name="radio-buttons-group"
              >
                {paymentMethods.map((payment: Record<string, any>) => (
                  <FormControlLabel
                    key={payment?.id}
                    className="form-radio"
                    value={payment?.name}
                    control={<Radio />}
                    label={
                      <div>
                        <img src={payment.logo || WalletLogo} alt="logo" />
                        <h5>{capitalize(payment.name)}</h5>
                      </div>
                    }
                    labelPlacement="start"
                  />
                ))}
              </RadioGroup>
            </FormControl>
            {/* <Link to={APP_ROUTES.bookedPage + search}> */}
            <PrimaryButton
              isLoading={postLoading}
              onClick={handlePayment}
              label="MAKE PAYMENT"
              fullWidth
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PaymentMethod;
