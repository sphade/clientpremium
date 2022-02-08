/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { isEmpty, pick } from "lodash";
import useCustomSnackbar from "../../../hooks/useSnackbar";
import { Preloader } from "../../../reusables";
import {
  bookCharterApi,
  bookJetPoolingApi,
  fundWalletApi,
  verifyPaymentApi,
} from "../../../routes/api";
import { APP_ROUTES } from "../../../routes/path";
import { getUrlQueryEntries } from "../../../utils";
import { PAYMENT_ENUM } from "../../../utils/constants";

const { JET_POOLING } = PAYMENT_ENUM;

const VerifyPayment = () => {
  console.log("verify payments");
  const history = useHistory();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
  const { reference = "" } = getUrlQueryEntries();

  const { isLoading: verifyLoading, data: verifyData } = useQuery(
    reference,
    async () => {
      const data = await verifyPaymentApi(reference);
      return data;
    }
  );

  const bookCharter = async ({
    type,
    id,
    data,
    subType,
  }: {
    type: string;
    id: string;
    data: Record<string, any>;
    subType: string;
  }) => {
    try {
      const response = await bookCharterApi({ type, id, data, subType });

      succesSnackbar(response?.message || "Success");

      history.push(`${APP_ROUTES.bookedPage}/?type=${type}`);
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    }
  };

  const fundWallet = async ({ data }: { data: Record<string, any> }) => {
    try {
      const response = await fundWalletApi(data);

      succesSnackbar(response?.message || "Success");

      history.push(APP_ROUTES.walletFunded);
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    }
  };
  const bookJetPooling = async ({
    id,
    data,
  }: {
    id: string;
    data: Record<string, any>;
  }) => {
    try {
      const response = await bookJetPoolingApi({ id, data });

      succesSnackbar(response?.message || "Success");

      history.push(APP_ROUTES.bookedPage);
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    }
  };

  useEffect(() => {
    if (verifyData && verifyData?.isPaymentSuccessful) {
      const { metadata = {} } = verifyData;

      const charterBookings = ["land", "sea", "air"];
      const walletFunding = ["wallet"];
      const jetPooling = [JET_POOLING];

      const { type = "", tripType = "" } = metadata;

      let subType = "";

      const { isShared = false } = metadata;
      let data = {};

      if (type === "air") {
        data = {
          tripType: metadata?.tripType,
          isShared: isShared,
          departureCity: metadata?.pickup,
          destinationCity: metadata?.destination,
          passengers: Number(metadata?.passenger || 1),
          amount: Number(metadata.amount || 0),
          departureDate: metadata?.departureDate,
          reference: reference,
        };
        subType = "one-way";
        if (tripType === "round trip") {
          data = {
            ...data,
            tripType: "round-trip",
            returnDate: metadata?.returnDate,
          };
          subType = "round-trip";
        }
      } else if (type === "land") {
        data = {
          ...pick(metadata, ["destination"]),
          pickupLocation: metadata?.pickup || "",
          pickupDate: metadata?.departureDate || "",
          amount: Number(metadata.amount || 0),
          duration: Number(metadata.duration || 1),
          reference: reference,
        };
      } else if (type === "sea") {
        if (tripType === "boat cruise") {
          data = {
            passengers: Number(metadata?.passenger || 1),
            departureDate: metadata?.departureDate || "",
            duration: Number(metadata.duration || 1),
            amount: Number(metadata.amount || 0),
            reference: reference,
            pickupTerminalId: metadata?.terminalId || "",
          };
          subType = "cruise";
        } else if (tripType === "boat trip") {
          data = {
            passengers: Number(metadata?.passenger || 1),
            departureDate: metadata?.departureDate || "",
            amount: Number(metadata.amount || 0),
            reference: reference,
            pickupTerminalId: metadata?.terminalId || "",
            destinationTerminalId: metadata?.destinationTerminalId || "",
          };
          subType = "trip";
        }
      } else if (type === "wallet") {
        data = {
          amount: Number(metadata.amount || 0),
          reference: reference,
        };
      } else if (type === JET_POOLING) {
        data = {
          passengers: metadata?.passengers,
        };
      }

      if (isEmpty(data)) return;

      if (charterBookings.includes(type)) {
        data = {
          ...data,
          provider: isShared ? "wallet" : "paystack",
        };

        console.log({ data });
        bookCharter({
          type: metadata?.type,
          id: metadata?.vehicleId,
          data,
          subType,
        });
      } else if (walletFunding.includes(type)) {
        fundWallet({ data });
      } else if (jetPooling.includes(type)) {
        bookJetPooling({ id: metadata?.id, data });
      }
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
