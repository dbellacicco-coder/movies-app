import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import APPRouter from "./Router";
import { Container, Button } from "@mui/material";
import { NotificationProvider } from "./context/NotificationContext";

const myApiKey = "8f781d70654b5a6f2fa69770d1d115a3";
const idCollection = 28;

function App() {
  const [userSessionId, setUserSessionId] = useState("");
  useEffect(() => {
    console.log("entramos use effect");
    // getSessionId();
  }, []);

  function getPopularMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  function getCategories() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${myApiKey}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  function getCategory() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&with_genres=12`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  function getMovieInfomation() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${502356}?api_key=${myApiKey}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  // function getLatestMovies() {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/latest?api_key=${myApiKey}&language=en-US`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }
  function getSessionId() {
    axios
      .get(
        `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${myApiKey}`
      )
      .then((res) => {
        setUserSessionId(res.data.guest_session_id);
        console.log(res.data.guest_session_id);
      });
  }
  function rateMovie() {
    axios
      .post(
        `
        https://api.themoviedb.org/3/movie/${502356}/rating?api_key=${myApiKey}`
      )
      // .post(
      //   `
      //   https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${myApiKey}&guest_session_id=<<gues_id>>`
      // )
      .then((res) => {
        console.log(res.data);
      });
  }
  // getMovieInfomation();
  // getCategory();
  // getLatestMovies();
  // getCategories();
  // getPopularMovies();

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
