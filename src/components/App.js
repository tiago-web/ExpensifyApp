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

const store = configureStore();

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
