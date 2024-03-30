import CostForm from "./CostForm";

const NewCost = (props) => {
  const saveCostDAtaHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  return (
    <div>
      <CostForm onSaveCostData={saveCostDAtaHandler} />
    </div>
  );
};

export default NewCost;
