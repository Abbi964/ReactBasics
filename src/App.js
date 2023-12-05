import Card from "./components/UI/Card";
import ExpenseForm from "./components/Form/ExpenseForm";
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

  return (
    <div>
      <ExpenseForm></ExpenseForm>
      <Card className = 'expenses'>
        <h2>Let's get started!</h2>
        {expenses.map((div, index) => (
          <ExpenseItem
            title={div.title}
            amount={div.amount}
            date={div.date}
            location={div.location}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default App;
