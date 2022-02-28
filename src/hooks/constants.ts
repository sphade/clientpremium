/* eslint-disable @typescript-eslint/no-explicit-any */
import { pick } from "lodash";
import { PAYMENT_ENUM } from "../utils/constants";

export const getMetaDataForBooking = ({
  metadata,
  reference,
}: {
  metadata: Record<string, any>;
  reference: string;
}): { data: Record<string, any>; subType: string } => {
  const { type = "", tripType = "" } = metadata;

  let subType = "";

  let data = {};

  if (type === "air") {
    // For Air Type
    data = {
      tripType: metadata?.tripType,
      isShared: false,
      departureCity: metadata?.pickup,
      destinationCity: metadata?.destination,
      passengers: Number(metadata?.passenger || 1),
      amount: Number(metadata.amount || 0),
      departureDate: metadata?.departureDate,
      reference: reference,
    };
    subType = "one-way";

    if (tripType === "round trip") {
      //Check for roundtrip
      data = {
        ...data,
        tripType: "round-trip",
        returnDate: metadata?.returnDate,
      };
      subType = "round-trip";
    }
  } else if (type === "land") {
    //Check for land
    data = {
      ...pick(metadata, ["destination"]),
      pickupLocation: metadata?.pickup || "",
      pickupDate: metadata?.departureDate || "",
      amount: Number(metadata.amount || 0),
      duration: Number(metadata.duration || 1),
      reference: reference,
    };
  } else if (type === "sea") {
    // Check for sea
    if (tripType === "boat cruise") {
      //Check for boat cruise
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
      //Check for boat rip
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
  } else if (type === PAYMENT_ENUM.JET_POOLING) {
    data = {
      passengers: metadata?.passengers,
    };
  }

  return { data, subType };
};
