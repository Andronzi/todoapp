import React from "react";
import plus from "@images/plus.svg";
import "./style.scss";
import { useAppDispatch } from "@redux/hooks";
import { ClientTaskData, handleAPIAction } from "@redux/store/contentSlice";

const Plus: React.FC<ClientTaskData> = taskData => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    handleAPIAction(dispatch, taskData);
  };

  return (
    <button
      className="absolute cursor-pointer"
      onClick={handleClick}
      tabIndex={0}
      type="button">
      <img
        alt="Добавить"
        src={plus}
      />
    </button>
  );
};

export default Plus;
