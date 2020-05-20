import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function EditExpensePage(props) {
	let location = useLocation();
	let { id } = useParams();

	console.log(location);
	console.log(id);

	return (
		<div>
			<h1>EditExpensePage</h1>
		</div>
	);
}
