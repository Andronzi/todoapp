import React from "react";
import Profile from "@Components/Profile/Profile";
import Search from "@Components/Search/Search";
import Icons from "@Components/Icons/Icons";

const TopBar: React.FC = () => (
  <div className="topBar flex flex-row h-20 items-center text-sm justify-between">
    <Profile />

    <Search />

    <Icons />
  </div>
);

export default TopBar;
