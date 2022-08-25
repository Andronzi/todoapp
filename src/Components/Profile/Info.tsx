import React, { useEffect } from "react";
import { RootState } from "src/redux/store";
import { useAppSelector } from "../../redux/hooks";
import { ProfileState } from "../../redux/features/profileSlice";
import styles from "./constants";

const Info: React.FC = () => {
  const profile: ProfileState = useAppSelector(
    (state: RootState) => state.profile,
  );

  console.log(profile);

  return (
    <div className={styles.profileInfo}>
      <h2 className={styles.name}>{profile.name}</h2>

      <p className={styles.email}>{profile.email}</p>
    </div>
  );
};

export default Info;
