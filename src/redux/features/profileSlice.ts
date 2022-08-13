import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  name: string;
  email: string;
}

const initialState: ProfileState = {
  name: "Андрей Радионов",
  email: "andrey.radioniv.2003@gmail.com",
} as ProfileState;

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    addData: (state, action: PayloadAction<object>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { addData } = profileSlice.actions;
export default profileSlice.reducer;
