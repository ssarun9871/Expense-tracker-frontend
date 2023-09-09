import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const oc = (event)=>{
    console.log(event.target.value)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">title</label>
          <input className="new-expense__control input" type="text" onChange={oc}/>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">date</label>
          <input className="new-expense__control input" type="date" />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">amount</label>
          <input className="new-expense__control input" type="number" />
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
