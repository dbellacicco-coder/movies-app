import { axiosInstance } from "./api";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";
const apiEndPoint = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${myApiKey}`;

export const getUser = {
  getUserInfo: function () {
    return axiosInstance.get(apiEndPoint);
  },
};
