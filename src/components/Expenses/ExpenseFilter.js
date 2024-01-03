import React from 'react';
import './ExpenseFilter.css'

function ExpenseFilter (props){

    function yearChangeHandeler(e){
        props.onChangeYear(e.target.value)
    }

    return (
        <div className="expense-filter">
            <h2>Filter By Year</h2> 
            <select className='year-selector' value={props.selected} onChange={yearChangeHandeler} id='year'>
              <option value='2024'>2024</option>
              <option value='2023'>2023</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;