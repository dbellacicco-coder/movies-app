import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInfoI } from "../../types";
import { ratingMovies } from "../../services/ratingMovie";

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserInfoI = {
  userEmail: "",
  userPassword: "",
  guest_session_id: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    userLogIn: (state, action: PayloadAction<UserInfoI>) => {
      console.log(state);
      state = action.payload;
      console.log("actualizado", state);
      return state;
    },
  },
});

export const { userLogIn } = userSlice.actions;
