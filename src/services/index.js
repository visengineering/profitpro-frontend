import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_BACKEND_API_URL;
export const BASE_AUTH_API_URL = process.env.REACT_APP_BACKEND_AUTH_API_URL;

export const authInterceptor = [
  (config) => {
    config.headers["ngrok-skip-browser-warning"] = true;

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
];

export const Service = (url, isAuth) =>
  axios.create({
    baseURL: isAuth ? BASE_AUTH_API_URL : BASE_API_URL + url,
  });

export const AuthorizedService = (url, isAuth) => {
  const authorizedService = Service(url, isAuth);
  authorizedService.interceptors.request.use(...authInterceptor);
  return authorizedService;
};
