import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpenseList = (props) => {

 if(props.items.length===0){
   return  <h2 className='expenses-list__fallback'>No expenses found.</h2>
 }

 else if(props.items.length===1){
  return (
    <ul className='expenses-list'>
      {props.items.map((element) => (
        <ExpenseItem
          id={element.id}
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
          location={element.location}
        />
      ))}
      <h2 className='expenses-list__fallback'>Only single Expense here.</h2>
    </ul>
  );
 }
 
  return (
    <ul className='expenses-list'>
      {props.items.map((element) => (
        <ExpenseItem
          id={element.id}
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
          location={element.location}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;