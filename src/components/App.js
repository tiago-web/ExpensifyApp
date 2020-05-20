import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
	Link,
	NavLink,
} from "react-router-dom";

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
					<Route path="/edit">
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

const Header = () => {
	return (
		<header>
			<h1>Expensify</h1>
			<nav>
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="is-active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/create" activeClassName="is-active">
							Create Expense
						</NavLink>
					</li>
					<li>
						<NavLink to="/edit" activeClassName="is-active">
							Edit Expense
						</NavLink>
					</li>
					<li>
						<NavLink to="/help" activeClassName="is-active">
							Help
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const ExpenseDashboardPage = () => {
	return (
		<div>
			<h1>ExpenseDashboardPage</h1>
		</div>
	);
};

const AddExpensePage = () => {
	return (
		<div>
			<h1>AddExpensePage</h1>
		</div>
	);
};

const EditExpensePage = () => {
	return (
		<div>
			<h1>EditExpensePage</h1>
		</div>
	);
};

const HelpPage = () => {
	return (
		<div>
			<h1>HelpPage</h1>
		</div>
	);
};

const NotFoundPage = () => {
	let location = useLocation();

	return (
		<div>
			No match for <code>{location.pathname}</code> <Link to="/">Go home</Link>
		</div>
	);
};

export default App;
