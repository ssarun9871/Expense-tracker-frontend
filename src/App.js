import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css";
import NewForm from "./components/NewExpense/NewExpense";
import expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";

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
    setFilteredExpense(expense.filter(exp=>{return exp.date.getFullYear() ==selectedYear}))
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
        {filteredExpense.map((element) => (
          <ExpenseItem
            id={element.id}
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
            location={element.location}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default App;
