import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByDate, sortByAmount, setTextFilter } from "../actions/filters";

const ExpenseListFilters = () => {
	const filters = useSelector(state => state.filters);
	const dispatch = useDispatch();

	const handleSort = e => {
		const { value } = e.target;

		if (value === "date") dispatch(sortByDate());
		else if (value === "amount") dispatch(sortByAmount());
	};

	return (
		<div>
			<input
				type="text"
				value={filters.text}
				onChange={e => dispatch(setTextFilter(e.target.value))}
			/>
			<select value={filters.sortBy} onChange={handleSort}>
				<option value="date">Date</option>
				<option value="amount">Amount</option>
			</select>
		</div>
	);
};

export default ExpenseListFilters;
