import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
import '../src/components/Expenses.css'

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
  );
}

export default App;
