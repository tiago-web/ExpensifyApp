import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import configureStore from "../store/configureStore";

import Header from "./Header";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";

import { addExpense } from "../actions/expenses";
import { setTextFilter } from "../actions/filters";

const store = configureStore();

store.dispatch(
	addExpense({ description: "Water bill", amount: 1000, createdAt: 2000 })
);
store.dispatch(
	addExpense({ description: "Gas bill", amount: 800, createdAt: 2300 })
);
store.dispatch(setTextFilter("Gas"));

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Header />

					<Switch>
						<Route exact path="/">
							<ExpenseDashboardPage />
						</Route>
						<Route path="/create">
							<AddExpensePage />
						</Route>
						<Route path="/edit/:id">
							<EditExpensePage />
						</Route>
						<Route path="/help">
							<HelpPage />
						</Route>
						<Route path="*">
							<NotFoundPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
