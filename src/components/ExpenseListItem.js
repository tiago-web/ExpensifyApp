import React from "react";
import { Link } from "react-router-dom";

export default function ExpenseListItem(props) {
	return (
		<div>
			<Link to={`/edit/${props.id}`}>
				<h3>{props.description}</h3>
			</Link>
			<p>
				Amount: {props.amount} - Created at: {props.createdAt}
			</p>
		</div>
	);
}
