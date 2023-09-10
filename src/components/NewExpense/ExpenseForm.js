import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  /*
  convert multiple state into single state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*
    approach to convert multiple state into single state

    approach 1
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
      });
    };
  
    approach 2
    setUserInput((prevState) => {
      return { prevState, enteredTitle: event.target.value };
    });
    */

    //note - between approach 2 and 3, always choose 3 becuase it prevState is always be the latest state snapshot
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">title</label>
          <input
            className="new-expense__control input"
            type="text"
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">date</label>
          <input
            className="new-expense__control input"
            type="date"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">amount</label>
          <input
            className="new-expense__control input"
            type="number"
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
