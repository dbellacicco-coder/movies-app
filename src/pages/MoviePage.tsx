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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { getMovies } from "../services/getMovies";
import { MovieI } from "../types";
import { ratingMovies } from "../services/ratingMovie";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import RatingMovieForm from "../components/form/RatingMovieForm";
import { useNotification } from "../context/NotificationContext";

const MoviePage: React.FC<{}> = () => {
  const { getSuccess } = useNotification();
  const [open, setOpen] = React.useState(false);
  const user = useAppSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [rateScore, setRateScore] = useState<number>(0);
  const [disableRating, setDisableRating] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieI>();

  useEffect(() => {
    if (user.guest_session_id !== "") {
      setDisableRating(false);
    }
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

  const handleOpenForm = () => {
    setOpen(true);
  };
  const handleCloseForm = () => {
    setOpen(false);
  };
  const handleRate = () => {
    setOpen(false);
    ratingMovies
      .postRatingMovie(movie!.id, { value: rateScore }, user.guest_session_id)
      .then((response) => {
        getSuccess(response.data.status_message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                {movie?.original_language!.toUpperCase()}
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
            <Tooltip
              title={
                disableRating
                  ? "You need to log in firt to rate this movie"
                  : "Rate this movie"
              }
            >
              <Box>
                <Button
                  onClick={handleOpenForm}
                  sx={{ mt: 2 }}
                  variant="contained"
                  fullWidth
                  disabled={disableRating}
                >
                  RATE THIS MOVIE
                </Button>
              </Box>
            </Tooltip>
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
      <Dialog maxWidth="lg" open={open} onClose={handleCloseForm}>
        <Box
          sx={{
            m: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <DialogTitle>Rate this movie</DialogTitle>
          <DialogContentText>
            The score goes from 0.5 to 10 , you can later update you rating
            score whenever you want.
          </DialogContentText>
          <RatingMovieForm setRateScore={setRateScore} />
          <DialogActions>
            <Button variant="contained" onClick={handleRate} autoFocus>
              Rate
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Container>
  );
};

export default MoviePage;
