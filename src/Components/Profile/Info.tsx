import React from "react";
import { RootState } from "@redux/store/store";
import { useAppSelector } from "@redux/hooks";
import { ProfileState } from "@redux/store/profileSlice";

const Info: React.FC = () => {
  const profile: ProfileState = useAppSelector(
    (state: RootState) => state.profile,
  );

  return (
    <div className="ml-2.5">
      <h2 className="font-nunito font-semibold text-sm">{profile.name}</h2>

      <p className="font-nunito font-regular text-xs text-darkgrey">
        {profile.email}
      </p>
    </div>
  );
};

export default Info;
