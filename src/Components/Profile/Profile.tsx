import React from "react";
import avatar from "@images/avatar.png";
import Info from "./Info";

const Profile: React.FC = () => (
  <div className="flex ml-4 items-center">
    <img
      alt="logo"
      className="w-11"
      src={avatar}
    />

    <Info />
  </div>
);

export default Profile;
