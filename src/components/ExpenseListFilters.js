import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	sortByDate,
	sortByAmount,
	setTextFilter,
	setStartDate,
	setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

const ExpenseListFilters = () => {
	const [state, setState] = useState({
		calendarFocused: null,
	});
	const filters = useSelector(state => state.filters);
	const dispatch = useDispatch();

	const handleSort = e => {
		const { value } = e.target;

		if (value === "date") dispatch(sortByDate());
		else if (value === "amount") dispatch(sortByAmount());
	};

	const onDatesChange = ({ startDate, endDate }) => {
		dispatch(setStartDate(startDate));
		dispatch(setEndDate(endDate));
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
			<DateRangePicker
				startDate={filters.startDate}
				endDate={filters.endDate}
				onDatesChange={onDatesChange}
				focusedInput={state.calendarFocused}
				onFocusChange={calendarFocused => setState({ calendarFocused })}
				showClearDates={true}
				numberOfMonths={1}
				isOutsideRange={() => false}
			/>
		</div>
	);
};

export default ExpenseListFilters;

// {/* <DateRangePicker
//   startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//   startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//   endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//   endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
//   focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//   onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
// /> */}
