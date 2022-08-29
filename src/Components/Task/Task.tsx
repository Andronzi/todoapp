import React from "react";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import { ContentState } from "@redux/store/contentSlice";
import TaskData from "./TaskData";

type TaskProps = {
  taskId: number;
};

const Task: React.FC<TaskProps> = ({ taskId }) => {
  const content: ContentState = useAppSelector(
    (state: RootState) => state.content,
  );
  return (
    <div className="task-block bg-white flex p-2 h-12 ml-16 mr-16 mt-7 rounded-xl items-center">
      <div className="ml-3 drag-circle rounded-full w-4 h-4 bg-white border border-black" />

      <TaskData
        groupName={content.tasks[taskId].groupName}
        value={content.tasks[taskId].value}
      />
    </div>
  );
};

export default Task;
