import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number, thunkAPI) => {
    const url = `https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/users?id=${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

export interface ProfileState {
  email: string;
  name: string;
  id: number;
}

const initialState = {
  email: "andrey.radioniv.2003@gmail.com",
  name: "Андрей Радионов",
  id: 1,
} as ProfileState;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.name = action.payload[0].name;
      state.email = action.payload[0].email;
    });
  },
});

export default profileSlice.reducer;
