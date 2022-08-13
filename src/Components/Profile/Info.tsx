import React from "react";
import { RootState } from "redux/store";
import { useAppSelector } from "../../redux/hooks";
import { ProfileState } from "../../redux/features/profileSlice";
import styles from "./constants";

const Info = (): JSX.Element => {
  const profile: ProfileState = useAppSelector(
    (state: RootState) => state.profile,
  );

  return (
    <div className={styles.profileInfo}>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
    </div>
  );
};

export default Info;
