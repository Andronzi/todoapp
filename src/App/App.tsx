import React from "react";
import Profile from "@Components/Profile/Profile";
import { profileProps, styles } from "./constants";

function App(): JSX.Element {
  return (
    <div className={styles.flex}>
      <Profile
        email={profileProps.email}
        name={profileProps.name}
      />
    </div>
  );
}

export default App;
