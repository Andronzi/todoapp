import React from "react";
import TopBar from "@Components/TopBar/TopBar";
import Navbar from "@Components/NavBar/Navbar";
import Content from "@Components/Content/Content";

function App(): JSX.Element {
  return (
    <>
      <TopBar />

      <div className="flex w-height">
        <Navbar />

        <Content />
      </div>
    </>
  );
}

export default App;
