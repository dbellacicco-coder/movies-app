import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MovieI } from "../../types";

const MovieCard: React.FC<MovieI> = ({
  id,
  title,
  poster_path,
  release_date,
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/movie/${id}`)}
      />

      <CardContent>
        <Box>
          <Typography sx={{ height: 100, overflow: "hidden" }} variant="h6">
            {title}
          </Typography>
        </Box>
        <Divider />
        <Typography sx={{ height: 100, overflow: "hidden" }} variant="h6">
          Release Date: {release_date}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/movie/${id}`)}
        >
          More info
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
