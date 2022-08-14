import React from "react";
import { groupStyles, groupAlt } from "./constants";

interface GroupProps {
  title: string;
  image: string;
}

const Group: React.FC<GroupProps> = ({ title, image }) => (
  <div className={groupStyles.group}>
    <img
      alt={groupAlt}
      className={groupStyles.image}
      src={image}
    />

    <p className={groupStyles.title}>{title}</p>
  </div>
);

export default Group;
