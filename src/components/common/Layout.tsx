import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";


const Layout: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
