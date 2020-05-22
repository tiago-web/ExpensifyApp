import React from "react";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { useDispatch } from "react-redux";
import { addExpense } from "../actions/expenses";

export default function AddExpensePage() {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div>
			<h1>Add Expense</h1>
			<ExpenseForm
				onSubmit={expense => {
					dispatch(addExpense(expense));
					history.push("/");
				}}
			/>
		</div>
	);
}
