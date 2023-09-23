import Card from "./components/UI/Card";
//import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";
import NewForm from "./components/NewExpense/NewExpense";
import expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import ExpenseList from "./components/Expenses/ExpensesList";
import ExpenseChart from "./components/Expenses/ExpenseChart";

// const addExpenseHandler = (exp) => {
//   console.log('APP.js');
//   console.log(exp)
// }

function App() {
  const [expense, setExpense] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpense, setFilteredExpense] = useState(expenses)

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    setFilteredExpense(expense.filter(exp=>{return exp.date.getFullYear() === parseInt(selectedYear)}))
  };


  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => [...prevExpense, newExpense]);
  };


  return (
    <div>
      <NewForm onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense}/> 
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default App;
