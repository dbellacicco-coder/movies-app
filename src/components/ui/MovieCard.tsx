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

interface MovieCardProps {
  adult?: boolean;
  id?: number;
  title: string;
  overview: string;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  adult,
  id,
  title,
  overview,
  poster_path,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
      />

      <CardContent>
        <Box>
          <Typography sx={{ height: 100, overflow: "hidden" }} variant="h6">
            {title}
          </Typography>
        </Box>
        <Divider />

        <Typography
          variant="subtitle2"
          sx={{
            mt: 2,
            height: 200,
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {overview.length > 150 ? `${overview.slice(0, 150)}...` : overview}
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
