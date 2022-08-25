import React from "react";
import TopBar from "@Components/TopBar/TopBar";
import Navbar from "@Components/NavBar/Navbar";
import Content from "@Components/Content/Content";
import { useAppDispatch } from "@redux/hooks";
import { fetchUserById } from "@redux/store/profileSlice";

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUserById(1));
  }, [dispatch]);

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
