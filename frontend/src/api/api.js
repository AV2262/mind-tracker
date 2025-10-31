import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ backend base URL
});

// ✅ Automatically attach JWT token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const setAuthToken = (token) => {
  if (token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
};

export default API;
