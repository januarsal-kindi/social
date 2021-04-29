import axios, { AxiosRequestConfig , AxiosError ,AxiosResponse} from "axios";
import ENV from '../shared/constants/env'

const httpRequest = () => {

	const API_BASE_CONFIG = {
		baseURL: ENV.API_URL,
		timeout: 60000,
	};

	const cancelToken = axios.CancelToken.source();

	const socialApi : any = axios.create(API_BASE_CONFIG);

	// add cancelation feature to axios request config
	const withAxiosCancelation = (config:AxiosRequestConfig) => {
		config.cancelToken = cancelToken.token;
		return config;
	};

	// handleGlobalConfig
	const handleGlobalConfig = (config : AxiosRequestConfig) => {
		const globalConfig = withAxiosCancelation(config);
		return globalConfig;
	};

	const axiosInterceptorsRequest = (config : AxiosRequestConfig ) => {
		config.headers["Content-Type"] = "application/json";
		return config;
	};

	const axiosInterceptorsRequestError = (error : AxiosRequestConfig) => {
		return Promise.reject(error);
	};

	const axiosInterceptorsResponseSuccess = (response : AxiosResponse ) => {
		return response;
	};

	const axiosInterceptorsResponseError = async (error : AxiosError) => {
		const { config, data, status } = error.response || {};
		return Promise.reject(error);
	};

	// digivApi.interceptors.response.use(
	//     axiosInterceptorsResponseSuccess,
	//     axiosInterceptorsResponseError
	// );

	socialApi.interceptors.response.use(
		axiosInterceptorsResponseSuccess,
		axiosInterceptorsResponseError,
	);

	socialApi.interceptors.request.use(
		axiosInterceptorsRequest,
		axiosInterceptorsRequestError,
	);
	socialApi.interceptors.request.use(handleGlobalConfig);
	return {
		cancelRequest: (message : any) => cancelToken.cancel(message),
		socialApi,
	};
};
export const socialApi = httpRequest().socialApi;
export default httpRequest;
