import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
  }

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
  }
  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  }
  
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">title</label>
          <input className="new-expense__control input" type="text" onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">date</label>
          <input className="new-expense__control input" type="date" onChange={dateChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">amount</label>
          <input className="new-expense__control input" type="number" onChange={amountChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
