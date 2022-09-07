/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { capitalize } from "lodash";

import { Preloader, PrimaryButton } from "../../../reusables";

import WalletLogo from "../../../assets/images/wallet.png";

import { useQuery } from "react-query";
import { getPaymentMethodsApi } from "../../../routes/api";
import { PaymentMethodsEnum } from "./types";
import { usePayment } from "../../../hooks";

const { PAYSTACK } = PaymentMethodsEnum;

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState(PAYSTACK);

  const {
    isLoading,
    error,
    data: paymentMethods = [],
  } = useQuery("fetchPaymentMethods", async () => {
    const data = await getPaymentMethodsApi();
    return data;
  });

  const {
    handlePayment,
    loadingPaystack,
    isLoading: walletLoading,
    newPaymentMethods,
  } = usePayment(paymentMethods);

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
            <p>Select a payment method below</p>
          </div>
          <div className="card__options">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={"title"}
                onChange={(e: any) => setPaymentMethod(e.target.value)}
                defaultValue={paymentMethod}
                name="radio-buttons-group"
              >
                {newPaymentMethods.map((payment: Record<string, any>) => (
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
              isLoading={loadingPaystack || walletLoading}
              onClick={() => handlePayment(paymentMethod)}
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
