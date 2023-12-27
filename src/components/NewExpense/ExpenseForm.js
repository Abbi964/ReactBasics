import React, {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm (props) {

    // creating states for title , amount and date
    const [enteredTitle, setTitle] = useState('0')
    const [enteredAmount, setAmount] = useState('0')
    const [enteredDate, setDate] = useState('0')

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

    function submitHandeler(e){
        e.preventDefault()
        let obj = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        
        props.onSaveExpenseData(obj)
        setTitle(''); 
        setAmount('');
        setDate('');
    }


    return (
        <div className="form-div">
            <form className="form-class">
                <div className='new-expense-controls' >
                    <div className='new-expense-control'>
                        <label for ='titleInput'>Expense Title</label>
                        <input value={enteredTitle} onChange={titleChangeHandler} type='text' id="titleInput"/>
                    </div>
                    <div className='new-expense-control'>
                        <label for ='amountInput'>Expense Amount</label>
                        <input value={enteredAmount} onChange={amountChangeHandler} type='number' step= '0.01' id="amountInput"/>
                    </div>
                    <div className='new-expense-control'>
                        <label for ='dateInput'>Expense Date</label>
                        <input value={enteredDate} onChange={dateChangeHandler} type='date' min= '2023-01-01' max='2025-12-31' id="dateInput"/>
                    </div>
                </div>
                <div className='new-expense-actions'>
                        <button onClick={submitHandeler} type="submit" className="submitBtn">Add Expense</button>
                </div>
            </form>

        </div>
    )
}

export default ExpenseForm;