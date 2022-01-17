/* eslint-disable @typescript-eslint/no-explicit-any */
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



