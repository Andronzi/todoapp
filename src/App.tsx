import React, { useState } from "react";
import Comp from "./Comp";

function App(): JSX.Element {
  const state = useState(0);
  return (
    <div>
      <h1>{state[0]}</h1>
      <Comp isSend={false} />
    </div>
  );
}

export default App;
