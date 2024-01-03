import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

function ExpenseList (props) {
   // checking if filtered expenses are zero or not and outputiing a special msg if zero
   let expenseContent;
   if (props.items.length === 0){
     return (
        <h2 className='expenses-list__fallback'>No Expense Found</h2>
     )
   }
   else{
     // turning array of filtered expense objects into array of ExpenseItem components
     expenseContent = props.items.map((exp) => (
       <ExpenseItem
         key={exp.id}
         title={exp.title}
         amount={exp.amount}
         date={exp.date}
         location={exp.location}
       ></ExpenseItem>
     )) 
   }
   if ( props.items.length === 1){
     expenseContent.push(<p key={Math.random()}>Only single Expense here. Please add more...</p>)
    } 

    return (
        <ul className='expenses-list'>
            {expenseContent}
        </ul>
    )
}

export default ExpenseList;