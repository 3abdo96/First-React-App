import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expesneData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expesneData);
    setIsEditting(false);
  };
  const startEdittingHandler = () => {
    setIsEditting(true);
  };
  const stopEditingHandler = () => {
    setIsEditting(false);
  };
  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
