import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from "@mui/material/TextField";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [open, setOpen] = useState(false);

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = () => {
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        style={{
          borderRadius: "50px",
          width: "80px",
          height: "80px",
          fontSize: "24px",
          position: "absolute",
          right: "15px",
          bottom: "15px",
        }}
        variant="contained"
        color="primary"
      >
        +
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialor-description"
      >
        <DialogTitle id="dialog-title">Добавьте расход</DialogTitle>
        <DialogContent>
          <TextField
            onChange={nameChangeHandler}
            style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
            id="outlined-basic"
            label="Название"
            variant="outlined"
          />
          <TextField
            onChange={amountChangeHandler}
            inputProps={{ type: "number" }}
            style={{ width: "100%", display: "flex" }}
            id="outlined-basic"
            label="Цена"
            variant="outlined"
          />
          <input
            onChange={dateChangeHandler}
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "210px",
              padding: "15px 0 15px 10px",
              marginTop: "10px",
            }}
            type="date"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button
            autoFocus
            onClick={() => {
              submitHandler();
              setOpen(false);
            }}
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CostForm;
