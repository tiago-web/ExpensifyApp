import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NotFoundPage() {
	let location = useLocation();

	return (
		<div>
			No match for <code>{location.pathname}</code> <Link to="/">Go home</Link>
		</div>
	);
}
