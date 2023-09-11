import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css"
import NewForm from "./components/NewExpense/NewExpense";
import expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";


// const addExpenseHandler = (exp) => {
//   console.log('APP.js');
//   console.log(exp)
// }

function App() {

  const [expense, setExpense] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => [...prevExpense, newExpense]);
  };


  const expenseItems = expense.map((element) => (
    <ExpenseItem
      id={element.id}
      title={element.title}
      amount={element.amount}
      date={element.date}
      location={element.location}
    ></ExpenseItem>
  ));

  return (
    <div >
      <NewForm onAddExpense={addExpenseHandler}/>
      <Card className='expenses'>{expenseItems}</Card>
    </div>
  );
}

export default App;
