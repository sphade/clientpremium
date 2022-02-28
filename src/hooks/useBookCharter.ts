/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import { useToggle } from ".";
import {
  bookCharterApi,
  bookJetPoolingApi,
  fundWalletApi,
} from "../routes/api";
import { APP_ROUTES } from "../routes/path";
import { getUrlQueryEntries } from "../utils";
import { PAYMENT_ENUM } from "../utils/constants";
import { getMetaDataForBooking } from "./constants";
import useCustomSnackbar from "./useSnackbar";

const useBookCharter = () => {
  const history = useHistory();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
  const { reference = "" } = getUrlQueryEntries();
  const [isLoading, toggleLoader] = useToggle();

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
      toggleLoader();
      const response = await bookCharterApi({ type, id, data, subType });
      succesSnackbar(response?.message || "Success");
      history.push(`${APP_ROUTES.bookedPage}/?type=${type}`, {
        charter: data,
      });
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    } finally {
      toggleLoader();
    }
  };

  const fundWallet = async ({ data }: { data: Record<string, any> }) => {
    try {
      toggleLoader();
      const response = await fundWalletApi(data);

      succesSnackbar(response?.message || "Success");

      history.push(APP_ROUTES.walletFunded);
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    } finally {
      toggleLoader();
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
      toggleLoader();
      const response = await bookJetPoolingApi({ id, data });

      succesSnackbar(response?.message || "Success");

      history.push(APP_ROUTES.bookedPage, { charter: data });
    } catch (error: any) {
      errorSnackbar(error?.response?.data?.error || "Error");
    } finally {
      toggleLoader();
    }
  };

  const handleCharter = ({
    verifyData,
  }: {
    verifyData: Record<string, any>;
  }) => {
    const { metadata = {} } = verifyData;

    const charterBookings = ["land", "sea", "air"];
    const walletFunding = ["wallet"];
    const jetPooling = [PAYMENT_ENUM.JET_POOLING];

    const { type = "", provider = "paystack" } = metadata;

    const allData = getMetaDataForBooking({ metadata, reference });
    let data = allData.data;
    const subType = allData.subType;

    if (isEmpty(data)) return;

    if (provider === "wallet") {
      delete data?.reference;
    }

    if (charterBookings.includes(type)) {
      data = {
        ...data,
        provider,
      };
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
  };

  return { handleCharter, isLoading };
};

export default useBookCharter;
