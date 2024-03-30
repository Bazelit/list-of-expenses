import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("New Text");
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <IconButton
        aria-label="CreateOutlinedIcon"
        style={{ color: "white", marginLeft: "10px" }}
        onClick={changeDescriptionHandler}
      >
        <CreateOutlinedIcon />
      </IconButton>
    </Card>
  );
};

export default CostItem;
