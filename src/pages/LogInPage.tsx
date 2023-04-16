import React, { useState } from "react";
import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useNotification } from "../context/NotificationContext";
import { formValidator } from "../utils/formValidator";
import { useAppDispatch } from "../redux/hooks";
import { userLogIn } from "../redux/slices/userSlice";
import { UserInfoI } from "../types";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/getUser";

const LogInPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getError, getSuccess } = useNotification();
  const [userLogInInfo, setUserLogInInfo] = useState<UserInfoI>({
    userEmail: "",
    userPassword: "",
    guest_session_id: "",
  });

  const logInData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogInInfo({ ...userLogInInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    formValidator
      .validate(userLogInInfo)
      .then(() => {
        getSuccess("Log in succesfully");
        getUser
          .getUserInfo()
          .then((response) => {
            dispatch(
              userLogIn({
                ...userLogInInfo,
                guest_session_id: response.data.guest_session_id,
              })
            );
            navigate(`/`);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        textAlign="center"
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Movies Plus+ Log In
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="userEmail"
                fullWidth
                type="text"
                label="User Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={logInData}
              />
              <TextField
                name="userPassword"
                fullWidth
                type="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={logInData}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                <Typography sx={{ mt: 1, mb: 1 }} variant="subtitle1">
                  ENTER
                </Typography>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogInPage;
