import React, { useState } from "react";
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState([]);

  const expenseHandler = () => {
    if (!input || !amount) return;
    const exp = {
      id: expense.length + 1,
      title: input,
      amount: amount,
    };
    setExpense([...expense, exp]);
    setInput("");
    setAmount("");
  };

  const deleteHandler=(id)=>{
    setExpense(expense.filter((expen)=>expen.id!==id))
  };

  return (
    <div className="main">
      <h1 className="title">Expense Tracker</h1>
      <div className="form-field">
        <input
          type="text"
          placeholder="Expense"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className='expButton' onClick={expenseHandler}>Add Expense</button>
      <ul>
        {
            expense.map((exp)=>(
                <li key={exp.id}>
                    <span>{exp.title}</span>
                    <span>${exp.amount}</span>
                    <button onClick={()=>(deleteHandler(exp.id))}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default ExpenseTracker;
