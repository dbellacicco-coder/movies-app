import { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { getMovies } from "../../services/getMovies";
import { MovieI } from "../../types";
import { useAppSelector } from "../../redux/hooks";

interface NavbarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar = (props: NavbarProps) => {
  const user = useAppSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  console.log(user.userEmail);
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalMoviesIcon color="primary" />
                  <Typography
                    onClick={() => navigate("/")}
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 3, cursor: "pointer" }}
                  >
                    Movies Plus+
                  </Typography>
                </Box>
              </Grid>

              <Button onClick={() => navigate("/login")} variant="outlined">
                LOG IN
              </Button>
            </Grid>
            {user.userEmail !== "" && (
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  onClick={() => navigate("/")}
                  variant="h6"
                  sx={{ fontWeight: 3, cursor: "pointer" }}
                >
                  Welcome...{user.userEmail.split("@")[0]}.
                </Typography>
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
