import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "@API/apiHandler";

type Task = {
  groupName: string;
  value: string;
  remindTime: Date;
  completionTime: Date;
  id: number;
};

export type ClientTaskData = {
  groupName: string;
  value: string;
  remindTime?: Date;
  completionTime?: Date;
};

export const fetchTasksByGroupName = fetchData(
  "tasks/fetchByGroupNameStatus",
  "https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/tasks",
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (data: ClientTaskData) => {
    const response = await fetch(
      "https://6307551fc0d0f2b8012cb7ad.mockapi.io/api/todo/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      },
    );

    const answer = await response.json();

    return answer;
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
    builder.addCase(fetchTasksByGroupName.pending, state => {
      state.isLoading = false;
    });

    builder.addCase(fetchTasksByGroupName.fulfilled, (state, action) => {
      state.tasks = action.payload.filter(
        (task: Task) => task.groupName === state.groupName,
      );
      state.isLoading = true;
    });

    builder.addCase(addTask.pending, state => {
      state.isLoading = false;
    });

    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
      state.isLoading = true;
    });
  },
});

export const { changeGroupName, setIsHome, setDate } = contentSlice.actions;
export default contentSlice.reducer;
