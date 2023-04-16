import { useState } from "react";
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
} from "@mui/material";

interface NavbarProps {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();
  const { window } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
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

              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={() => navigate("/login")}
                    variant="contained"
                  >
                    Log In
                  </Button>
                  {/* <FormControl variant="outlined">
                    <InputLabel>Seach movie</InputLabel>
                    <OutlinedInput
                      type="text"
                      endAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                      label="Seach"
                    />
                  </FormControl> */}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
