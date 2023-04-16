import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import APPRouter from "./Router";
import { Container, Button } from "@mui/material";
import { NotificationProvider } from "./context/NotificationContext";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";
const idCollection = 28;

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Container sx={{ mt: 9 }} maxWidth="xl">
          <APPRouter />
        </Container>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
