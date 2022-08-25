import React from "react";
import { useAppDispatch } from "@redux/hooks";
import { changeGroupName } from "@redux/store/contentSlice";

interface GroupProps {
  title: string;
  image: string;
}

const Group: React.FC<GroupProps> = ({ title, image }) => {
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(changeGroupName(title));
  }

  return (
    <div
      className="bg-lightgrey w-52 flex aligns-center py-2 pl-2.5 rounded ml-4 mt-4 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}>
      <img
        alt="icon"
        className="w-4 h-4 mt-0.5"
        src={image}
      />

      <p className="font-nunito text-sm ml-4">{title}</p>
    </div>
  );
};

export default Group;
