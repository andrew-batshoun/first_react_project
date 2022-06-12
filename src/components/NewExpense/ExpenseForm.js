import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    //You can use multiple states to for multiple functions
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] =useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //you can also use a single state for all functions but,
    //you have to use the spread operator so the other values
    //don't get overwritten or lost.
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            //using the spread operator allows the object to be brought in
            //allows other information to be saved while changing the title
            //in this example
            ...userInput,
            enteredTitle: event.target.value,
            })

    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    };
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    };

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
