import './ExpenseDetails.css'

function ExpenseDetails(props) {
  function clickHandler(){
    console.log('Clicked!!!!')
  }

  function deletionHandeler(e){
    e.target.parentElement.parentElement.remove()
  }

  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <div className="expense-item__description">{props.location}</div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deletionHandeler}>DELETE</button>
    </div>
  );
}

export default ExpenseDetails;
