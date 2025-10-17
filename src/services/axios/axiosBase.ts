import axios from "axios";
import Cookies from "js-cookie";

import { useGlobalStore } from "@/store/global";

const instanceLongLeaveAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_CLIENT,
});
instanceLongLeaveAPI.interceptors.request.use(
  (config) => {
    const token = Cookies.get("sessionLogin");

    config.headers["Access-Control-Allow-Origin"] = "*";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instanceLongLeaveAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      useGlobalStore.getState().setIsLoading(false);
      switch (error.response.status) {
        case 400:
          useGlobalStore
            .getState()
            .setErrorApi(
              error.response.data || { message: "Bad Request", status: 400 },
            );
          console.error("Bad Request");
          break;
        case 401:
          const cookieKeys = Object.keys(Cookies.get());
          useGlobalStore
            .getState()
            .setErrorApi(
              error.response.data || { message: "Unauthorized", status: 401 },
            );

          cookieKeys.forEach((key) => {
            Cookies.remove(key);
          });

          console.error("Unauthorized");
          break;
        case 403:
          useGlobalStore
            .getState()
            .setErrorApi(
              error.response.data || { message: "Forbidden", status: 403 },
            );
          console.error("Forbidden");
          break;
        case 404:
          useGlobalStore
            .getState()
            .setErrorApi(
              error.response.data || { message: "Not Found", status: 404 },
            );
          console.error("Not Found");
          break;
        case 500:
          useGlobalStore.getState().setErrorApi({
            message: "Internal Server Error",
            status: 500,
            data: error?.response?.data?.data,
          });
          console.error("Internal Server Error");
          break;
        default:
          useGlobalStore.getState().setErrorApi(
            error.response.data || {
              message: `Error: ${error?.response?.status}`,
              status: error?.response?.status,
            },
          );
          console.error(`Error: ${error?.response?.status}`);
      }
    } else if (error?.request) {
      useGlobalStore.getState().setErrorApi({
        message: "No response from server. Please try again later.",
        status: 0,
      });
      console.error("No response from server. Please try again later.");
    } else {
      useGlobalStore.getState().setErrorApi({
        message: error.message || "An unexpected error occurred",
        status: 0,
      });
      console.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  },
);

export default instanceLongLeaveAPI;
