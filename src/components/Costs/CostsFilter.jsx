import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <FormControl
      style={{
        width: "120px",
      }}
    >
      <InputLabel>Год</InputLabel>
      <Select value={props.year} label="Age" onChange={yearChangeHandler}>
        <MenuItem value="2024">2024</MenuItem>
        <MenuItem value="2023">2023</MenuItem>
        <MenuItem value="2022">2022</MenuItem>
        <MenuItem value="2021">2021</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CostsFilter;
