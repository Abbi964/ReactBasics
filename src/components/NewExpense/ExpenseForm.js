import React, {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm () {

    // creating states for title , amount and date
    const [title, setTitle] = useState('0')
    const [amount, setAmount] = useState('0')
    const [date, setDate] = useState('0')

    function titleChangeHandler(e){
        console.log(e.target.value);
        setTitle(e.target.value)
    }
    function amountChangeHandler(e){
        console.log(e.target.value);
        setAmount(e.target.value)
    }
    function dateChangeHandler(e){
        console.log(e.target.value);
        setDate(e.target.value)
    }


    return (
        <div className="form-div">
            <form className="form-class">
                <div className='new-expense-controls' >
                    <div className='new-expense-control'>
                        <label for ='titleInput'>Expense Title</label>
                        <input onChange={titleChangeHandler} type='text' id="titleInput"/>
                    </div>
                    <div className='new-expense-control'>
                        <label for ='amountInput'>Expense Amount</label>
                        <input onChange={amountChangeHandler} type='number' step= '0.01' id="amountInput"/>
                    </div>
                    <div className='new-expense-control'>
                        <label for ='dateInput'>Expense Date</label>
                        <input onChange={dateChangeHandler} type='date' min= '2023-01-01' max='2025-12-31' id="dateInput"/>
                    </div>
                </div>
                <div className='new-expense-actions'>
                        <button type="submit" className="submitBtn">Add Expense</button>
                </div>
            </form>

        </div>
    )
}

export default ExpenseForm;