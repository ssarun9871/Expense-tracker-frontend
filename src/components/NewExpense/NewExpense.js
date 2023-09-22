import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css"
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData)
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEdititngHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
    {!isEditing && <button className="new-expense__actions" onClick={startEditingHandler} >Add new expense</button>}
    {isEditing && <ExpenseForm   onSaveExpenseData= {saveExpenseDateHandler} onCancel={stopEdititngHandler}/>}
      
    </div>
  );
}

export default NewExpense;
