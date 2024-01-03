import React, {useState} from 'react';
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import '../src/components/Expenses/Expenses.css'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
      location: "Mumbai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
      location: "Chennai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2024, 5, 12),
      location: "Lucknow",
    },
  ];

  // using satate for expenses and year selected
  const [currentExpenses , setExpenses] = useState(expenses)
  const [yearSelected, setYear] = useState('2024')

  let addExpenseHandler = (expense) =>{
    setExpenses((current)=>{
      return [...current,expense]
    })
    console.log(currentExpenses)
  }

  let yearChangeHandeler = (e)=>{
    setYear(e.target.value);
  }

  return (
    <div>
      <NewExpense onAddExpence = {addExpenseHandler}/>
      <Card className='expense-item'>
        <h2>Filter By Year</h2> 
        <select onChange={yearChangeHandeler} id='year'>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </Card>
      <Card className = 'expenses'>
        {currentExpenses.filter((exp)=>exp.date.getFullYear() === +yearSelected).map((exp) => (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
            location={exp.location}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default App;
