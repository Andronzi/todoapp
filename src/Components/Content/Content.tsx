import React from "react";
import { RootState } from "@redux/store/store";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { ContentState, setDate } from "@redux/store/contentSlice";

const Content: React.FC = () => {
  const content: ContentState = useAppSelector(
    (state: RootState) => state.content,
  );
  const dispatch = useAppDispatch();

  function getDate() {
    const currentDate = new Date();
    const weeks = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
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

    return `${weeks[currentDate.getDay() - 1]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
  }

  if (content.isHome) {
    dispatch(setDate(getDate()));
  }

  return (
    <div className="bg-lightgrey w-screen h-screen ml-4">
      <h1>{content.groupName}</h1>

      <p>{content.isHome ? content.date : ""}</p>
    </div>
  );
};

export default Content;
