import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
