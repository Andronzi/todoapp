import React from "react";
import Profile from "@Components/Profile/Profile";
import { styles } from "./constants";

function App(): JSX.Element {
  return (
    <div className={styles.flex}>
      <Profile />
    </div>
  );
}

export default App;
