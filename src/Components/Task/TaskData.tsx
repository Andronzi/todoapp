import React from "react";

type DataProps = {
  groupName: string;
  value: string;
};

const TaskData: React.FC<DataProps> = ({ groupName, value }) => (
  <div className="task-data ml-4 font-nunito font-regular text-sm">
    <p>{value}</p>

    <p className="font-nunito font-regular text-xs text-darkgrey">
      {groupName}
    </p>
  </div>
);

export default TaskData;
