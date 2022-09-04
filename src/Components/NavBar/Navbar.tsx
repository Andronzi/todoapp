import React from "react";
import sunny from "@images/navbar/sunny.svg";
import star from "@images/navbar/star.svg";
import plan from "@images/navbar/plan.svg";
import user from "@images/navbar/user.svg";
import tasks from "@images/navbar/tasks.svg";
import Group from "./Group";

const Navbar: React.FC = () => (
  <div>
    <Group
      image={sunny}
      title="Мой день"
    />

    <Group
      image={star}
      title="Важно"
    />

    <Group
      image={plan}
      title="Запланировано"
    />

    <Group
      image={user}
      title="Назначен мне"
    />

    <Group
      image={tasks}
      title="Задачи"
    />
  </div>
);

export default Navbar;
