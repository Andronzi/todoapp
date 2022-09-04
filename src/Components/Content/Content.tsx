import React from "react";
import { RootState } from "@redux/store/store";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  ContentState,
  setDate,
  fetchTasksByGroupName,
} from "@redux/store/contentSlice";
import Task from "@Components/Task/Task";
import AddField from "@Components/AddField/AddField";
import TasksLoader from "@src/Loaders/TasksLoader";
import "./fonts.scss";

const Content: React.FC = () => {
  const content: ContentState = useAppSelector(
    (state: RootState) => state.content,
  );
  const dispatch = useAppDispatch();

  function getDate() {
    const currentDate = new Date();
    const weeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Augast",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${weeks[currentDate.getDay()]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
  }

  if (content.isHome) {
    dispatch(setDate(getDate()));
  }

  React.useEffect(() => {
    dispatch(fetchTasksByGroupName());
  }, [dispatch, content.groupName]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {content.isLoading ? (
        <div className="content bg-lightgrey w-full h-full ml-4 relative">
          <h1 className="content-title font-nunito ml-16 mt-8">
            {content.groupName}
          </h1>

          <p className="content-subtitle font-nunito ml-16 text-darkgrey">
            {content.isHome ? content.date : ""}
          </p>

          {content.tasks.map((task, index) => (
            <Task
              key={task.id}
              taskId={index}
            />
          ))}

          <AddField />
        </div>
      ) : (
        <TasksLoader />
      )}
    </>
  );
};

export default Content;
