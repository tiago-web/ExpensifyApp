import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default reducer state", () => {
	const state = expensesReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual([]);
});

test("should remove expense by id", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: expenses[1].id,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: "-1",
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should add an expense", () => {
	const action = {
		type: "ADD_EXPENSE",
		expense: {
			id: "3",
			description: "Water",
			note: "",
			amount: 700,
			createdAtAt: 100,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		...expenses,
		{ id: "3", description: "Water", note: "", amount: 700, createdAtAt: 100 },
	]);
});

test("should edit an expense", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[0].id,
		updates: {
			description: "Water",
			amount: 700,
			createdAt: 100,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state[0]).toEqual({
		id: "1",
		description: "Water",
		note: "",
		amount: 700,
		createdAt: 100,
	});
});

test("should not edit expense if expense not found", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: "-1",
		updates: {
			description: "Water",
			amount: 700,
			createdAt: 100,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
