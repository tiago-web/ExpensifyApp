import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export default function EditExpensePage(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const expense = useSelector(state =>
		state.expenses.find(expense => expense.id === id)
	);

	return (
		<div>
			<ExpenseForm
				expense={expense}
				onSubmit={expense => {
					dispatch(editExpense(id, expense));
					history.push("/");
				}}
			/>
			<button
				onClick={() => {
					dispatch(removeExpense(id));
					history.push("/");
				}}
			>
				Remove
			</button>
		</div>
	);
}
