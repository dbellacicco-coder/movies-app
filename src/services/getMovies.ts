import { axiosInstance } from "./api";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";
const apiEndPoint = `movie/popular?api_key=${myApiKey}&language=en-US&page=1`;

export const getMovies = {
  getPopularMovies: function ({ page }: { page: number }) {
    return axiosInstance.get(apiEndPoint, {
      params: {
        page,
      },
    });
  },
  getMovieInfo: function ({ movie_id }: { movie_id: string | undefined }) {
    return axiosInstance.get(
      `movie/${movie_id}?api_key=${myApiKey}&language=en-US`,
      {
        params: {
          movie_id,
        },
      }
    );
  },
};
