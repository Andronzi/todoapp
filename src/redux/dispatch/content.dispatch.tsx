import { AppDispatch } from "@redux/store/store";
import { ClientTaskData, addTask } from "@redux/store/contentSlice";

const handleAPIAction = (dispatch: AppDispatch, taskData: ClientTaskData) => {
  dispatch(addTask(taskData));
};

export default handleAPIAction;
