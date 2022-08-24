import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number, thunkAPI) => {
    const response = await fetch(`http://localhost:8080/users?${userId}`);
    return response.json();
  },
);

export interface ProfileState {
  name: string;
  email: string;
}

const initialState = {
  name: "Андрей Радионов",
  email: "andrey.radioniv.2003@gmail.com",
} as ProfileState;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export default profileSlice.reducer;
