import React from "react";
import avatar from "@images/avatar.png";
import Info from "./Info";
import styles, { alt } from "./constants";

const Profile: React.FC = () => (
  <div className={styles.div}>
    <img
      alt={alt}
      className={styles.imageSize}
      src={avatar}
    />

    <Info />
  </div>
);

export default Profile;
