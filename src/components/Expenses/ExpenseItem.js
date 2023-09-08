import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from '../UI/Card.js'
import React, {useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);


  const onDeleteHandler = (id) => {
    const element = document.getElementById(id);
    if(element){
      element.remove();
    }
    else {
      console.log("no-element found")
    }
  }

  const onTitleChange = () => {
    setTitle('update!');
  }

  const onAmounChange = () => {
    setAmount('$100');
  }
  
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        location={props.location}
        amount={amount}
      />
     
      <button onClick={onTitleChange}>Change title</button>
      <button onClick={()=> onDeleteHandler(props.id)}>Delete</button>
      <button onClick={onAmounChange}>change amount</button>
    </Card>
  );
}

export default ExpenseItem;
