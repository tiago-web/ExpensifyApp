import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = props => {
	const [state, setState] = useState({
		description: props.expense ? props.expense.description : "",
		note: props.expense ? props.expense.note : "",
		amount: props.expense ? (props.expense.amount / 100).toString() : "",
		createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
		calendarFocused: false,
		error: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;

		if (name !== "amount") {
			setState(prevState => ({
				...prevState,
				[name]: value,
			}));
		} else {
			if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
				setState(prevState => ({
					...prevState,
					[name]: value,
				}));
			}
		}
	};

	const onDateChange = createdAt => {
		if (createdAt) {
			setState(prevState => ({
				...prevState,
				createdAt,
			}));
		}
	};

	const onFocusChange = ({ focused }) => {
		setState(prevState => ({ ...prevState, calendarFocused: focused }));
	};

	const onSubmit = e => {
		if (!state.description || !state.amount) {
			// Set error state equal to "Please provide description and amount."
			setState(prevState => ({
				...prevState,
				error: "Please provide description and amount.",
			}));
		} else {
			// Clear error
			setState(prevState => ({ ...prevState, error: "" }));

			props.onSubmit({
				description: state.description,
				amount: parseFloat(state.amount, 10) * 100,
				createdAt: state.createdAt.valueOf(),
				note: state.note,
			});
		}

		e.preventDefault();
	};

	return (
		<div>
			{!!state.error && <p>{state.error}</p>}
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Description"
					autoFocus
					value={state.description}
					name="description"
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Amount"
					value={state.amount}
					name="amount"
					onChange={handleChange}
				/>
				<SingleDatePicker
					date={state.createdAt}
					onDateChange={onDateChange}
					focused={state.calendarFocused}
					onFocusChange={onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					placeholder="Add a note for your expense (optional)"
					value={state.note}
					name="note"
					onChange={handleChange}
				></textarea>
				<button>Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
