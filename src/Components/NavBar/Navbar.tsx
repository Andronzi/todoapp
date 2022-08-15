import React from "react";
import sunny from "@images/navbar/sunny.png";
import star from "@images/navbar/star.png";
import plan from "@images/navbar/plan.png";
import user from "@images/navbar/user.png";
import tasks from "@images/navbar/tasks.png";
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
