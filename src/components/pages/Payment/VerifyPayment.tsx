/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useBookCharter } from "../../../hooks";
import { Preloader } from "../../../reusables";
import { verifyPaymentApi } from "../../../routes/api";
import { getUrlQueryEntries } from "../../../utils";

const VerifyPayment = () => {
  const { reference = "" } = getUrlQueryEntries();

  const { isLoading: verifyLoading, data: verifyData } = useQuery(
    reference,
    async () => {
      const data = await verifyPaymentApi(reference);
      return data;
    }
  );

  const { handleCharter } = useBookCharter();

  useEffect(() => {
    if (verifyData && verifyData?.isPaymentSuccessful) {
      handleCharter({ verifyData });
    }
  }, [verifyData]);

  if (verifyLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <p>Payments</p>
    </div>
  );
};

export default VerifyPayment;
