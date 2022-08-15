import React from "react";
import notifications from "@images/notifications.png";
import settings from "@images/settings.png";
import { notificationsalt, settingsalt, styles } from "./constants";

const Icons: React.FC = () => (
  <div className={styles.div}>
    <img
      alt={notificationsalt}
      className={styles.image}
      src={notifications}
    />

    <img
      alt={settingsalt}
      src={settings}
    />
  </div>
);

export default Icons;
