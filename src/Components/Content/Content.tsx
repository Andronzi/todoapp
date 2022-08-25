import React from "react";
import { RootState } from "@redux/store/store";
import { useAppSelector } from "@redux/hooks";
import { ContentState } from "@redux/store/contentSlice";

const Content: React.FC = () => {
  const content: ContentState = useAppSelector(
    (state: RootState) => state.content,
  );

  return (
    <div className="bg-lightgrey w-screen h-screen ml-4">
      <h1>{content.groupName}</h1>
    </div>
  );
};

export default Content;
