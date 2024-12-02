import axios from "axios";
import { jwtDecode } from "jwt-decode";
import useUserStore from "../store/useUsersStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const checkTokenValidity = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;
  } catch (e) {
    console.error(e);
    return false;
  }
};

apiClient.interceptors.request.use(
  (config) => {
    const { user } = useUserStore.getState();
    if (user?.token) {
      if (!checkTokenValidity(user.token)) {
        useUserStore.getState().clearUser();
        return Promise.reject(new Error("Token expired"));
      }
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      useUserStore.getState().clearUser();
    }
    return Promise.reject(error);
  },
);

export default apiClient;