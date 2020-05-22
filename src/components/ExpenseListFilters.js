import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByDate, sortByAmount, setTextFilter } from "../actions/filters";

const ExpenseListFilters = () => {
	const filters = useSelector(state => state.filters);
	const dispatch = useDispatch();

	const handleSort = e => {
		const { value } = e.target;

		value === "date" ? dispatch(sortByDate()) : dispatch(sortByAmount());
	};

	return (
		<div>
			<input
				type="text"
				defaultValue={filters.text}
				onChange={e => dispatch(setTextFilter(e.target.value))}
			/>
			<select onChange={handleSort}>
				<option value="date">Date</option>
				<option value="amount">Amount</option>
			</select>
		</div>
	);
};

export default ExpenseListFilters;
