import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = () => {
	const expenses = useSelector(state =>
		selectExpenses(state.expenses, state.filters)
	);

	return (
		<div>
			<h1>Expense List</h1>
			{expenses.map(({ id, description, amount, createdAt }, index) => (
				<ExpenseListItem
					key={index}
					id={id}
					description={description}
					amount={amount}
					createdAt={createdAt}
				/>
			))}
		</div>
	);
};

export default ExpenseList;
