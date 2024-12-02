import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },

    logout: (state, action) => {},
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
