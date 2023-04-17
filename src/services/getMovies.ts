import { axiosInstance } from "./api";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";
const apiEndPoint = `movie/popular?api_key=${myApiKey}&language=en-US&page=1`;

const apiEndPoint2 = (movieName: string) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${movieName}`;

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
  getMovieByTitle: function (movieName: string) {
    return axiosInstance.get(apiEndPoint2(movieName));
  },
};
