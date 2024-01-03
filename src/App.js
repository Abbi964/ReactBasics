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
      date: new Date(2020, 7, 14),
      location: "Mumbai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Chennai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Lucknow",
    },
  ];

  // using satate for expenses
  const [currentExpenses , setExpenses] = useState(expenses)

  let addExpenseHandler = (expense) =>{
    setExpenses((current)=>{
      return [...current,expense]
    })
    console.log(currentExpenses)
  }

  return (
    <div>
      <NewExpense onAddExpence = {addExpenseHandler}/>
      <Card className = 'expenses'>
        {currentExpenses.map((exp) => (
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
