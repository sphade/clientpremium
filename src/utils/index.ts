/* eslint-disable @typescript-eslint/no-explicit-any */
import { lowerCase, startCase } from "lodash";
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { MONTHS } from "./constants";

export const useGetParams = () => {
  const location = useLocation();

  const search = location?.search || "";

  const split = search.split("=");

  const key = (split[0] || "").replace("?", "");
  const value = split[1] || "";

  return { key, value, search };
};

export const formatNumberToCurrency = ({
  number,
  currencyCode = "NGN",
  precision = 0,
}: {
  number: string | number;
  currencyCode?: string;
  precision?: number;
}): string => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: precision,
  });

  return formatter.format(Number(number));
};

export const charterMappings: Record<string, any> = {
  air: "aircraft",
  land: "vehicle",
  sea: "boat",
};

//   export const isTokenExpired = (token: any): boolean => {
// 	const decodedToken: JwtPayload = jwtDecode(token);
// 	return !decodedToken || decodedToken.exp * 1000 < Date.now();
// };

export const getCharterName = (filter: string) => {
  return filter.toLowerCase() === "air"
    ? "Air craft"
    : filter.toLowerCase() === "sea"
    ? "Boat"
    : "Car";
};

export const getUrlQueryEntries = (
  urlQuery = window.location.search as string
): Record<string, string> => {
  // Get the query end from the search url provided
  // Example: ?hi=payhippo&g=you
  const query = urlQuery.replace("?", "");

  // Split if multiple queries
  const queryGroups = query.split("&");

  // Construct pair empty object
  const urlPairs: Record<string, any> = {};

  // Loop through each group
  for (const pair of queryGroups) {
    // Split pair by '='
    const splitPair = pair.split("=");

    const [key, value, ...rest] = splitPair;

    // Check to make sure there is no extra bound '='
    if (splitPair?.length === 2) {
      // Add to object
      urlPairs[key] = value;
    } else {
      // Assign existing value to a new value variable
      let newValue = value;

      // For each extra item, append an '=' sign
      rest.forEach(() => {
        newValue = `${newValue}=`;
      });

      // Add to object
      urlPairs[key] = newValue;
    }
  }

  // Return result
  return urlPairs;
};

/** Convert string to title case */
export const convertToTitleCase = (string: string) =>
  startCase(lowerCase(string));

export const getFullDate = (date: number | string = 0) => {
  const dateObj = new Date(date);
  const monthNumber = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${day}, ${MONTHS[monthNumber]} ${year}`;
};
export const getTime = (date: number | string = 0) => {
  const dateObj = new Date(date);
  const time = dateObj.getTime();

  return time;
};

const addNewKeysToMap = ({
  data,
  newKeys,
}: {
  data: Record<string, any>[];
  newKeys: Record<string, any>;
}) => {
  return data.map((ele) => ({ ...ele, ...newKeys }));
};

export const getAllTripFilters = ({ data }: { data: Record<string, any> }) => {
  const segmentedTrips: Record<string, any> = {
    land: addNewKeysToMap({
      data: data?.land || [],
      newKeys: { type: "Land Charter" },
    }),
    sea: [
      ...addNewKeysToMap({
        data: data?.sea?.boatCruises || [],
        newKeys: { type: "Boat Cruises" },
      }),
      ...addNewKeysToMap({
        data: data?.sea?.boatTrips || [],
        newKeys: { type: "Boat Trips" },
      }),
    ],
    air: [
      ...addNewKeysToMap({
        data: data?.air?.oneWay || [],
        newKeys: { type: "One Way" },
      }),
      ...addNewKeysToMap({
        data: data?.air?.roundTrip || [],
        newKeys: { type: "Round Trip" },
      }),
      ...addNewKeysToMap({
        data: data?.air?.multiCity || [],
        newKeys: { type: "Multi City" },
      }),
      ...addNewKeysToMap({
        data: data?.air?.pooling || [],
        newKeys: { type: "Jet Pooling" },
      }),
    ],
  };

  const allTrips = Object.values(segmentedTrips).reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);

  const allPendingTrips = allTrips.filter(
    (trip: Record<string, any>) => trip?.status === "pending"
  );

  const allCompletedTrips = allTrips.filter(
    (trip: Record<string, any>) => trip?.status !== "pending"
  );

  const allPendingSegmented = Object.keys(segmentedTrips).reduce(
    (acc: Record<string, any>, curr) => {
      const values = segmentedTrips[curr].filter(
        (trip: Record<string, any>) => trip?.status === "pending"
      );

      acc[curr] = acc[curr] ? [...acc[curr], ...values] : [...values];

      return acc;
    },
    {}
  );

  const allCompletedSegmented = Object.keys(segmentedTrips).reduce(
    (acc: Record<string, any>, curr) => {
      const values = segmentedTrips[curr].filter(
        (trip: Record<string, any>) => trip?.status !== "pending"
      );

      acc[curr] = acc[curr] ? [...acc[curr], ...values] : [...values];

      return acc;
    },
    {}
  );

  return {
    allPendingTrips,
    allCompletedTrips,
    segmentedTrips,
    allCompletedSegmented,
    allPendingSegmented,
  };
};

export const transformNonEventChange = (
  {
    name,
    value,
  }: { name: string; value?: string | number | File | Blob | any },
  domEvent = {}
): ChangeEvent<HTMLInputElement> => {
  const event = {
    ...domEvent,
    target: {
      ...domEvent,
      name,
      value,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return event as any;
};

export const apiHandleErrorMessage = ({ error }: { error: any }) => {
  const defaultMessage = "Error";
  const message =
    error.response.data?.error ||
    error.message ||
    error.response.data.message ||
    defaultMessage;

  return message;
};
