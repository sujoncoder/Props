import React, { useState } from "react";
import Doughter from "./components/Doughter";
import Father from "./components/Father";
import Other from "./components/Other";
import Son from "./components/Son";

function App() {
  const [money, setMoney] = useState(10)
  return (
    <div className="space-y-6">
      <Father money={money}></Father>
      <Son money={money}></Son>
      <Doughter money={money}></Doughter>
      <Other money={money}></Other>
    </div>
  );
}

export default App;
