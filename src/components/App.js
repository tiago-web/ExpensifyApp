import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";

function App() {
	return (
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
	);
}

export default App;
