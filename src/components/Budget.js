import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (newBudget <= totalExpenses) {
      alert('You cannot reduce the budget value lower than the spendind');
    }
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: $</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
