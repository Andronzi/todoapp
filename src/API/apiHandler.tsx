import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = (typePrefix: string, url: string) =>
  createAsyncThunk(typePrefix, async () => {
    const response = await fetch(url);
    return response.json();
  });

const postData = () => {};

export { fetchData, postData };
