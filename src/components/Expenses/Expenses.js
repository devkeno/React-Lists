import ExpenseItem from './ExpenseItem';
import './Expenses.css';

let date = new Date(2022,2,28);

const Expenses = (props) => {
    const expenses = props.expenses;
    console.log(expenses);
    return (
        <div className="expenses">
            {expenses.map((expense,index)=> {
                return (
                    <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={date}></ExpenseItem>
                )
            }) }
        </div>
    )
}

export default Expenses;