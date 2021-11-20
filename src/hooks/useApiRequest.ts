/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import { useAppStorage } from '../hooks';


export const baseURL = 'https://bossbus-premium-api-staging.herokuapp.com/api/v1/';

// Construct axios instance for general requests
const makeRequest = axios.create({
	baseURL: baseURL, // Initialize with base url
	timeout: 1 * 60 * 1000, // Set timeout at 60s
});

/** Make an api request call */
const useApiRequest = (): AxiosInstance => {
	// Resolve request type
	const request = makeRequest;


	// Add request interceptor
	request.interceptors.response.use(
		config => config,
		error => {
			// CHeck if response was aborted because of timeout
			if (error?.code === 'ECONNABORTED') {
				// notification.error('This request took too long. Please try again');
			}
			return Promise.reject(error);
		}
	);

	return request;
};

export default useApiRequest;
