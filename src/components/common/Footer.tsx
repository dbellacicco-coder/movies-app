import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <Container
      sx={{ flexGrow: 1, textAlign: "center", height: "150", my: 3 }}
      maxWidth="xl"
    >
      <Typography color="primary" variant="subtitle1">
        Movie Plus+ All rights Revered 2023
      </Typography>
    </Container>
  );
};

export default Footer;
