import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices";

export const store = configureStore({
  reducer: {
    UserReducer: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
