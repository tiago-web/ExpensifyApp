import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

export default () => {
	return (
		<div>
			<ExpenseListFilters />
			<ExpenseList />
		</div>
	);
};
