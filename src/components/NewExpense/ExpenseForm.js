import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    const obj ={
     title : enteredTitle,
     amount: enteredAmount,
     date : new Date(enteredDate)
    }

    props.onSaveExpenseData(obj);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">title</label>
          <input
            className="new-expense__control input"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">date</label>
          <input
            className="new-expense__control input"
            type="date"
            value={enteredDate}
            min ="2021-01-01"
            max = "2023-12-20"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label" >amount</label>
          <input
            className="new-expense__control input"
            type="number"
            value={enteredAmount}
            min = '0.01'
            step = '0.01'
            onChange={amountChangeHandler}
          />
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
