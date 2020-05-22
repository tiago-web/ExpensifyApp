// Expenses Reducer

const EXPENSES_INITIAL_STATE = [];

export default (state = EXPENSES_INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE":
			return state.map(expense => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates };
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};
