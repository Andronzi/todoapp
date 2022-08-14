import React from "react";
import Profile from "@Components/Profile/Profile";
import Search from "@Components/Search/Search";
import Icons from "@Components/Icons/Icons";
import styles from "./constants";

const TopBar: React.FC = () => (
  <div className={styles.flex}>
    <Profile />

    <Search />

    <Icons />
  </div>
);

export default TopBar;
