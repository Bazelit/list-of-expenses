import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {filteredCosts.length === 0 && (
        <h2 style={{ textAlign: "center", color: "black" }}>
          В этом году нет расходов
        </h2>
      )}
      {filteredCosts.length > 0 &&
        filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
    </Card>
  );
};

export default Costs;
