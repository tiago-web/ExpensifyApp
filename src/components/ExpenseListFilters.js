import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilters = () => {
	const filters = useSelector(state => state.filters);
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type="text"
				defaultValue={filters.text}
				onChange={e => dispatch(setTextFilter(e.target.value))}
			/>
		</div>
	);
};

export default ExpenseListFilters;
