import { RatingMovieArgs } from "../types";
import { axiosInstance } from "./api";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";

const rateMovieEndPoint = (id: number, guestId: string) =>
  `movie/${id}/rating?api_key=${myApiKey}&guest_session_id=${guestId}`;

const ratedMovieListEndPoint = (guestId: string) =>
  `/guest_session/${guestId}/rated/movies?api_key=${myApiKey}`;

export const ratingMovies = {
  postRatingMovie: function (
    id: number,
    req: { value: number },
    guestId: string
  ) {
    return axiosInstance.post(rateMovieEndPoint(id, guestId), req);
  },
  getListRatedMovie: function (guestId: string) {
    return axiosInstance.get(ratedMovieListEndPoint(guestId));
  },
};
