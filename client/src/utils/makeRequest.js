import axios from "axios";

export const API = axios.create({
  baseURL: "https://memoirify.onrender.com/api",
  withCredentials: true,
});
