/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useBookCharter } from "../../../hooks";
import { Loader, Preloader } from "../../../reusables";
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
      <Stack
        sx={{
          color: "red",
          paddingTop: "8rem",
          minHeight: "100vh",
          width: "100vw",
        }}
        display="flex"
        justifyContent="center"
        spacing={2}
        direction="row"
      >
        <Loader />
      </Stack>
    </div>
  );
};

export default VerifyPayment;
