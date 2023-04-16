import React, { useEffect, useRef, useState } from "react";
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
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNotification } from "../context/NotificationContext";
import { getMovies } from "../services/getMovies";
import MovieCard from "../components/ui/MovieCard";
import { MovieI } from "../types";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const movieNameRef: React.Ref<any> = useRef("");
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

  const handleSearch = () => {
    setLoading(true);
    getMovies;

    const movieName = movieNameRef!.current!.value.trim().split(" ").join("+");
    getMovies
      .getMovieByTitle(movieName)
      .then((response) => {
        setTotalPages(response.data.total_pages);
        setMovies(response.data.results);
        setTimeout(() => setLoading(false), 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePage = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

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
            <Button>
              <Typography onClick={() => navigate("/mylist")} variant="h6">
                My Rated List
              </Typography>
            </Button>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon
                onClick={handleSearch}
                color="primary"
                sx={{ mr: 1, my: 0.5, cursor: "pointer" }}
              />
              <TextField
                inputRef={movieNameRef}
                label="Search movie..."
                variant="standard"
              />
            </Box>
            <Pagination
              sx={{ mb: 3, mt: 4 }}
              count={totalPages}
              page={currentPage}
              onChange={handlePage}
              variant="outlined"
              color="primary"
              size="medium"
              hidden={movies.length === 0 ? true : false}
            />
            <Typography hidden={movies.length === 0 ? true : false}>
              {currentPage}
            </Typography>
          </Box>
          <Grid sx={{ my: 2 }} container spacing={2}>
            {movies.length === 0 ? (
              <Box sx={{ my: 2 }}>
                <Typography>No results</Typography>
              </Box>
            ) : (
              <>
                {movies?.map((movie) => {
                  const { title, id, poster_path, release_date } = movie;
                  return (
                    <Grid key={id} item>
                      <MovieCard
                        title={title}
                        poster_path={poster_path}
                        id={id}
                        release_date={release_date}
                      />
                    </Grid>
                  );
                })}
              </>
            )}
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
            <Typography hidden={movies.length === 0 ? true : false}>
              {currentPage}
            </Typography>
            <Pagination
              sx={{ mb: 3 }}
              count={totalPages}
              page={currentPage}
              onChange={handlePage}
              variant="outlined"
              color="primary"
              size="medium"
              hidden={movies.length === 0 ? true : false}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Home;
