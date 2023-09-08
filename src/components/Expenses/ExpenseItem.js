import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from '../UI/Card.js'

function ExpenseItem(props) {

  function onDeleteHandler(id){
    const element = document.getElementById(id);
    if(element){
      element.remove();
    }
    else {
      console.log("no-element found")
    }
  }
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={()=> onDeleteHandler(props.id)}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
