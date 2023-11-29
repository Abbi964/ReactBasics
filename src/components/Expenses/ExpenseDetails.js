import React, { useState } from 'react';
import './ExpenseDetails.css'

function ExpenseDetails(props) {

  const [title , setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount)

  function clickHandler(){
    setTitle('Updated!!')
    console.log(title)
  }

  function deletionHandeler(e){
    e.target.parentElement.parentElement.remove()
  }

  function expenseHandler (){
    setAmount('100.00');
  }

  return (
    <div className='expense-details'>
      <h2>{title}</h2>
      <div className="expense-item__description">{props.location}</div>
      <button onClick={expenseHandler}>Change Expense</button>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deletionHandeler}>DELETE</button>
    </div>
  );
}

export default ExpenseDetails;
