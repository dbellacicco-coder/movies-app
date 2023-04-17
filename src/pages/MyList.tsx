import React, { useEffect, useState } from "react";
import MovieCard from "../components/ui/MovieCard";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUser } from "../services/getUser";
import { ratingMovies } from "../services/ratingMovie";
import { MovieI } from "../types";
import { useNavigate } from "react-router-dom";

export const MyList = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.UserReducer);
  const [ratedMovieList, setRatedMovieList] = useState<MovieI[] | undefined>(
    []
  );

  useEffect(() => {
    if (user.guest_session_id !== "") {
      ratingMovies
        .getListRatedMovie(user.guest_session_id)
        .then((response) => {
          console.log(response);
          setRatedMovieList(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <Container sx={{ textAlign: "center" }} maxWidth="xl">
      <Button>
        <Typography onClick={() => navigate("/")} variant="h6">
          Home
        </Typography>
      </Button>
      {user.guest_session_id === "" && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" color="primary">
            Please, log in to see your rated , movies.
          </Typography>
        </Box>
      )}
      <Grid sx={{ my: 2 }} container spacing={2}>
        {ratedMovieList?.map((movie) => {
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
      </Grid>
    </Container>
  );
};
