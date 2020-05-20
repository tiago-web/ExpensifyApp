import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
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
						<NavLink to="/help" activeClassName="is-active">
							Help
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
