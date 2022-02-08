/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHistory } from "react-router-dom";
import { useCheckCharterType, useRouterState } from "../../../hooks";
import useCustomSnackbar from "../../../hooks/useSnackbar";
import { bookCharterApi } from "../../../routes/api";
import { APP_ROUTES } from "../../../routes/path";
import {
  formatNumberToCurrency,
  getCharterName,
  getUrlQueryEntries,
} from "../../../utils";

export const useBookingSummary = ({
  data = {},
  shareFlight = false,
}: {
  data: Record<string, any>;
  shareFlight: boolean;
}) => {
  const { isLand, charterType } = useCheckCharterType();

  const history = useHistory();

  const [routerState] = useRouterState();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
  console.log("heresa");

  const { type, id } = getUrlQueryEntries();

  const {
    tripType,
    destination,
    departureDate,
    departureTime,
    passenger,
    charterType: routerStateCharterType,
  } = routerState;

  let { pickup } = routerState;

  const noDestination = isLand || ["boat cruise"].includes(tripType);
  const noTerminal = isLand;

  pickup = { name: pickup, departureDate, departureTime };

  if (!noTerminal) {
    pickup = { ...pickup, ...data?.pickupTerminal };
  }

  const destinationTerminal = (data?.destinations || [])[0];

  const handlePayment = async (extraData: Record<string, any> = {}) => {
    if (shareFlight) {
      let sharedData: Record<string, any> = {
        ...extraData,
        tripType: tripType === "round trip" ? "round-trip" : tripType,
        isShared: true,
        departureCity: typeof pickup !== "string" ? pickup?.name : pickup,
        destinationCity: destination,
        departureDate: departureDate,
        passengers: passenger,
        amount: data?.price,
        provider: "wallet",
      };

      if (tripType === "round trip") {
        sharedData = {
          ...sharedData,
          returnDate: routerState?.returnDate,
        };
      }

      try {
        const response = await bookCharterApi({
          id,
          type: routerStateCharterType,
          data: sharedData,
          subType: tripType === "round trip" ? "round-trip" : tripType,
        });

        succesSnackbar(response?.message || "Success");
        history.push(`${APP_ROUTES.bookedPage}/?type=${type}`);
      } catch (error: any) {
        errorSnackbar(error?.response?.data?.error || "Error");
      }
    } else {
      history.push(APP_ROUTES.getPaymentMethod, {
        ...routerState,

        price: data?.price || 0,
        type,
        id,
        ...(pickup?.id && { terminalId: pickup?.id }),
        ...(destinationTerminal &&
          destinationTerminal?.id && {
            destinationTerminalId: destinationTerminal?.id,
          }),
      });
    }
  };

  const goToPayment = async ({
    extraData = {},
  }: {
    extraData?: Record<string, any>;
  }) => {
    await handlePayment(extraData);
  };

  const getExtraDatas = () => {
    const price = formatNumberToCurrency({ number: data?.price });

    const charterTypeName = getCharterName(charterType);

    const getName = () => {
      const { builder = "", model = "", brand = "" } = data;
      return `${brand || builder}, ${model}`;
    };

    const bookSummaryData = {
      tripType,
      passenger,
      noDestination,
      destinationTerminal,
      pickup,
      charterTypeName,
      getName,
      price,
      goToPayment,
    };

    return bookSummaryData;
  };

  return { handlePayment, getExtraDatas, goToPayment };
};
