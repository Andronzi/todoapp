import React from "react";
import { changeGroupName } from "../../redux/features/contentSlice";
import { useAppDispatch } from "../../redux/hooks";
import { groupStyles, groupAlt } from "./constants";

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
      className={groupStyles.group}
      onClick={handleClick}>
      <img
        alt={groupAlt}
        className={groupStyles.image}
        src={image}
      />

      <p className={groupStyles.title}>{title}</p>
    </div>
  );
};

export default Group;
