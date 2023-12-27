import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense (props){

    let saveExpenseDataHandler = (enteredExpenseData)=>{
        let expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpence(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;