import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import Greeting from "./components/UI/Greeting";
import { useState } from "react";
import "./App.css"

const INITIAL_COSTS = [];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div style={{maxWidth: "70rem", margin: "0 auto"}}>
      <Greeting />
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
