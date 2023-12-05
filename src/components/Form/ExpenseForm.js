import React from 'react';
import './ExpenseForm.css'

function ExpenseForm () {

    function changeHandler(){
        let titleInput = document.getElementById('titleInput').value ;
        console.log(titleInput)
    }

    return (
        <div className="form-div">
            <form className="form-class">
                <label for ='titleInput'>Expense Title</label><br/>
                <input onChange={changeHandler} type='text' className="form-input" id="titleInput"/><br/>
                <label for="amountInput">Expense Amount</label><br/>
                <input type="number" className="form-input" id="amountInput"/><br/>
                <label for="dateInput">Expense Date</label><br/>
                <input type="date" className="form-input" id="dateInput"/><br/>
                <button type="submit" className="submitBtn">Add Expense</button>

            </form>

        </div>
    )
}

export default ExpenseForm;