import React from "react";
import { removeExpense } from "../actions/expenses";
import { useDispatch } from "react-redux";

export default function ExpenseListItem(props) {
	const dispatch = useDispatch();

	return (
		<div>
			<h3>{props.description}</h3>
			<p>
				Amount: {props.amount} - Created at: {props.createdAt}
			</p>
			<button onClick={() => dispatch(removeExpense(props.id))}>Remove</button>
		</div>
	);
}
