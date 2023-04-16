import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import NavBarTest from "../components/NavBarTest";
import {
  Container,
  Button,
  Grid,
  Box,
  CircularProgress,
  Stack,
  Typography,
  Pagination,
} from "@mui/material";
import { useNotification } from "../context/NotificationContext";
import { getMovies } from "../services/getMovies";
import MovieCard from "../components/ui/MovieCard";
import { MovieI } from "../types";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieI[]>([]);
  useEffect(() => {
    setLoading(true);
    getMovies
      .getPopularMovies({ page: currentPage })
      .then((response) => {
        setTotalPages(response.data.total_pages);
        setMovies(response.data.results);
        setTimeout(() => setLoading(false), 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  console.log("movies", movies);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Pagination
              sx={{ mb: 3, mt: 4 }}
              count={totalPages}
              page={currentPage}
              onChange={handlePage}
              variant="outlined"
              color="primary"
              size="medium"
            />
            <Typography>{currentPage}</Typography>
          </Box>
          <Grid sx={{ my: 2 }} container spacing={2}>
            {movies?.map((movie) => {
              const { title, id, overview, poster_path } = movie;
              return (
                <Grid key={id} item>
                  <MovieCard
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>{currentPage}</Typography>
            <Pagination
              sx={{ mb: 3 }}
              count={totalPages}
              page={currentPage}
              onChange={handlePage}
              variant="outlined"
              color="primary"
              size="medium"
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Home;
