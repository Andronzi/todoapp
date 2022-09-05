import React from "react";
import useInput from "@src/hooks/useInput";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import { ContentState, ClientTaskData } from "@redux/store/contentSlice";
import handleAPIAction from "@redux/dispatch/content.dispatch";
import { RootState } from "@redux/store/store";
import Plus from "./Plus";

const AddField = () => {
  const content: ContentState = useAppSelector(
    (state: RootState) => state.content,
  );
  const dispatch = useAppDispatch();

  const { value, onChange } = useInput();

  const taskData: ClientTaskData = {
    groupName: content.groupName,
    value,
    remindTime: undefined,
    completionTime: undefined,
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAPIAction(dispatch, taskData);
    }
  };

  return (
    <div className="absolute bottom-20 w-full">
      <div className="flex ml-16 mr-16 items-center relative">
        <Plus {...taskData} />

        <input
          className="pl-12 py-3 font-nunito font-regular text-sm rounded-xl bg-white w-full"
          onChange={onChange}
          onKeyDown={event => keyDownHandler(event)}
          placeholder="Добавить задачу"
          type="text"
          value={value}
        />
      </div>
    </div>
  );
};

export default AddField;
