import './ExpenseDetails.css'

function ExpenseDetails(props) {
  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <div className="expense-item__description">{props.location}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
