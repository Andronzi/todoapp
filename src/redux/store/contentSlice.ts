import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Task = {
  groupName: string;
  value: string;
  remindTime: Date;
  completionTime: Date;
  id: number;
};

type ClientTaskData = {
  groupName: string;
  value: string;
  remindTime: Date;
  completionTime: Date;
};

export const fetchTasksByGroupName = createAsyncThunk(
  "tasks/fetchByGroupNameStatus",
  async (groupName: string, thunkAPI) => {
    const response = await fetch(
      "https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/tasks",
    );

    const data = await response.json();
    const result = data.filter((task: Task) => task.groupName === groupName);

    return result;
  },
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (data: ClientTaskData, thunkAPI) => {
    const response = await fetch(
      "https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/tasks",
      { method: "POST", body: JSON.stringify(data) },
    );
  },
);

type TasksArray = {
  groupName: string;
  value: string;
  remindTime: Date;
  completionTime: Date;
  id: number;
};

export interface ContentState {
  groupName: string;
  isHome: boolean;
  date: string;
  tasks: Array<TasksArray>;
  isLoading: boolean;
}

const initialState = {
  groupName: "Мой день",
  isHome: true,
  date: "Thursday, 25 Augast",
  tasks: [],
  isLoading: false,
} as ContentState;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeGroupName: (state, action: PayloadAction<string>) => {
      state.groupName = action.payload;
      state.isLoading = false;
    },
    setIsHome: (state, action: PayloadAction<boolean>) => {
      state.isHome = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTasksByGroupName.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = true;
    });

    builder.addCase();
  },
});

export const { changeGroupName, setIsHome, setDate } = contentSlice.actions;
export default contentSlice.reducer;
