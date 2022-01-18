/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { useAppStorage } from "../hooks";

export const baseURL = 'https://bossbus-premium-api-staging.herokuapp.com/api/v1';

const request = axios.create({
	baseURL,
	timeout: 3 * 60 * 1000, // Set timeout at 3 minutes
});


axios.defaults.baseURL = baseURL;

const useAxios = () => {

    const {getFromStore} = useAppStorage();

    // Add a request interceptor
	request.interceptors.request.use(
		async (config: any) => {
			// Get user token
			const user = await getFromStore('user') || {};
			const token = user?.token || '';

			
			// If no token, do nothing else and return config
			if (!token) {
				return config;
			}

			// // If token has expired, log the user out
			// if (isTokenExpired(token)) {
			// 	// Notify the user of their session timeout
			// 	notification.error('Session expired. Please login again');

			// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// 	return logoutUser() as any;
			// }

			// If none of above match then modify the headers appropriately
			config.headers.Authorization = `Bearer ${token}`;

			return config;
		},
		error => Promise.reject(error)
	);


    return request;
}

export const apiRoutes = {
    signup: '/user/signup',
    createUser: '/user/create',
    resendOtp: '/user/resend-verify-otp',
    forgotPassword: '/user/forgot-password',
    resetPassword: '/user/reset-password',
    login: '/user/login',
    allVehicles: '/products/vehicle/',
    userProfile: '/user/profile',
    changePhone: '/user/change-phone',
    changePassword: '/user/change-password',
    changeProfilePhoto: '/user/photo',
    getHelp: '/help',
    getCharterType: '/products/type?product=',
    getTripType: '/trips/type?service=',
}


export const signUserUp =  async (data: Record<string, unknown>) => {
    const response = await axios.post(apiRoutes.signup, data )

    return response.data;
}
export const resendVerifyOtp =  async (data: Record<string, unknown>) => {
    const response = await axios.post(apiRoutes.resendOtp, data )
    return response.data;
}
export const getVehicles =  async () => {
    const response = await axios.get(apiRoutes.allVehicles)
    return response.data;
}


export const createUser =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.createUser, data )
    return response.data;
}
export const login =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.login, data )
    return response.data;
}
export const forgotPassword =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.forgotPassword, data )
    return response.data;
}

export const resetPassword =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.resetPassword, data )
    return response.data;
}


export const fetchCharter =  async (type: string) => {
    const response = await axios.get(`/products/${type}`)
    return response.data.data;
}
export const fetchCharterById =  async (type: string, id: string) => {
    const response = await axios.get(`/${type}/${id}`)
    return response.data;
}

export const fetchUserProfile =  async () => {
    const request = useAxios();
    const response = await request.get(apiRoutes.userProfile)
    return response.data;
}

export const changePhoneNumber =  async (data: Record<string, unknown> ) => {
    const request = useAxios();
    const response = await request.patch(apiRoutes.changePhone, data )
    return response.data;
}
export const changePassword =  async (data: Record<string, unknown> ) => {
    const request = useAxios();

    const response = await request.patch(apiRoutes.changePassword, data )
    return response.data;
}
export const updateProfilePhotoApi =  async (data: any) => {
    const request = useAxios();

    const response = await request.post(apiRoutes.changeProfilePhoto, data )
    return response.data;
}


export const getHelpApi =  async (data: any) => {

    const response = await axios.post(apiRoutes.getHelp, data )
    return response.data;
}


export const getCharterTypeApi =  async (charterType: string) => {

    const response = await axios.get(apiRoutes.getCharterType + charterType)
    return response.data.data;
}

export const getTripTypeApi =  async (charterType: string) => {

    const response = await axios.get(apiRoutes.getTripType + charterType)
    return response.data.data;
}

export const getTerminalApi =  async (charterType: string) => {
    const response = await axios.get(charterType)
    return response.data.data;
}





