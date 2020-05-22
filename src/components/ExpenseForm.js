import React, { useState } from "react";

const ExpenseForm = () => {
	const [state, setState] = useState({
		description: "",
		note: "",
		amount: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;

		if (name !== "amount") {
			setState(prevState => ({
				...prevState,
				[name]: value,
			}));
		} else {
			if (value.match(/^\d*(\.\d{0,2})?$/)) {
				setState(prevState => ({
					...prevState,
					[name]: value,
				}));
			}
		}
	};

	return (
		<div>
			<form>
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
