import React from "react";
import notifications from "@images/notifications.png";
import settings from "@images/settings.png";

const Icons: React.FC = () => (
  <div className="flex mr-4">
    <img
      alt="Уведомления"
      className="mr-4"
      src={notifications}
    />

    <img
      alt="Настройки"
      src={settings}
    />
  </div>
);

export default Icons;
