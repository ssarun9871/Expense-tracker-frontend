import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/Expenses.css"

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Delhi",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), location: 'Himanchal'},
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Dehradun",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Chandigarh",
  },
];

function App() {
  const expenseItems = expenses.map((element) => (
    <ExpenseItem
      key={element.id}
      title={element.title}
      amount={element.amount}
      date={element.date}
      location={element.location}
    ></ExpenseItem>
  ));

  return (
    <div >
      <h2>Let's get started!</h2>
      <Card className='expenses'>{expenseItems}</Card>
    </div>
  );
}

export default App;
