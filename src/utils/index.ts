/* eslint-disable @typescript-eslint/no-explicit-any */
import { lowerCase, startCase } from "lodash";
import { useLocation } from "react-router-dom"


export const useGetParams =() => {
    const location = useLocation();

    const search = location?.search || "";

    const split = search.split("=");

    const key = (split[0] || '').replace('?', "")
    const value = split[1] || ''

    return { key, value, search};
} 


export const formatNumberToCurrency = ({
	number,
	currencyCode = 'NGN',
	precision = 0,
}: {
	number: string | number;
	currencyCode?: string;
	precision?: number;
}): string => {
	const formatter = new Intl.NumberFormat('en-NG', {
		style: 'currency',
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
}


export const getUrlQueryEntries = (
	urlQuery = window.location.search as string
): Record<string, string> => {
	// Get the query end from the search url provided
	// Example: ?hi=payhippo&g=you
	const query = urlQuery.replace('?', '');

	// Split if multiple queries
	const queryGroups = query.split('&');

	// Construct pair empty object
	const urlPairs: Record<string,any> = {};

	// Loop through each group
	for (const pair of queryGroups) {
		// Split pair by '='
		const splitPair = pair.split('=');

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
export const convertToTitleCase = (string: string) => startCase(lowerCase(string));