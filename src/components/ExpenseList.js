import React from "react";
import { useSelector } from "react-redux";

const ExpenseList = props => {
	const expenses = useSelector(state => state.expenses);

	return <div>{expenses.length}</div>;
};

// const ConnectedExpenseList = connect(state => {
// 	return {
// 		expenses: state.expenses,
// 	};
// })(ExpenseList);

export default ExpenseList;
