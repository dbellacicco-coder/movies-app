import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Tooltip,
  Button,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { getMovies } from "../services/getMovies";
import { MovieI } from "../types";

const MoviePage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieI>();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    getMovies
      .getMovieInfo({ movie_id: id })
      .then((response) => {
        setMovie(response.data);
        setTimeout(() => setLoading(false), 1200);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid sx={{ mt: 1 }} columnSpacing={2} container>
          <Grid item sm={12} md={5}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.5em",
              }}
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <Typography color="primary" sx={{ my: 1 }} variant="h3">
              {movie?.title}
            </Typography>
            <Divider />
            <Typography sx={{ my: 1 }} variant="h6">
              {movie?.overview}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Original language">
                <LanguageIcon color="primary" />
              </Tooltip>
              <Typography sx={{ my: 1 }} variant="h6">
                {movie?.original_language.toUpperCase()}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Release Date">
                <CalendarMonthIcon color="primary" />
              </Tooltip>
              <Typography sx={{ my: 1 }} variant="h6">
                {movie?.release_date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Popularity">
                <ThumbUpOffAltIcon color="primary" />
              </Tooltip>
              <Typography sx={{ my: 1 }} variant="h6">
                {Math.round(movie?.popularity!)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Puntuacion">
                <SportsScoreIcon color="primary" />
              </Tooltip>
              <Typography sx={{ my: 1 }} variant="h6">
                {Math.round(movie?.vote_average!)}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Ratings">
                <HowToVoteIcon color="primary" />
              </Tooltip>
              <Typography sx={{ my: 1 }} variant="h6">
                {movie?.vote_count}
              </Typography>
            </Box>

            <Button sx={{ mt: 2 }} variant="contained" fullWidth>
              RATE THIS MOVIE
            </Button>
            <Button
              sx={{ mt: 2 }}
              fullWidth
              variant="outlined"
              onClick={() => navigate(`/`)}
            >
              Go Back
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default MoviePage;
