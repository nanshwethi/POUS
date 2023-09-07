import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      (state.user = payload.user),
        Cookies.set("user", JSON.stringify(state.user));
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;