import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

function Expenses (props){

    // Using state for year selected
    const [yearSelected, setYear] = useState('2024')

    let yearChangeHandeler = (changedYear)=>{
        setYear(changedYear);
    }

    // filtering expenses based on year selected
    let filteredExpenses = props.items.filter((exp)=>exp.date.getFullYear() === +yearSelected)

    return (
        <Card classname='expenses'>
            <ExpenseFilter
            selected = {yearSelected}
            onChangeYear = {yearChangeHandeler}
            />
            <ExpenseList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;