import React from "react";
import Info from "./Info";
import styles from "./constants";
import avatar from "@images/avatar.png";

const Profile = (): JSX.Element => {
  return (
    <div className={styles.div}>
      <img src={avatar} />
      <Info />
    </div>
  );
};

export default Profile;
