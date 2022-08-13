import React from "react";
import styles from "./constants";

interface ProfileProps {
  name: string;
  email: string;
}

const Profile = ({ name, email }: ProfileProps): JSX.Element => {
  return (
    <div className={styles.div}>
      <div>
        <h2>{name}</h2>

        <p>{email}</p>
      </div>
    </div>
  );
};

export default Profile;
