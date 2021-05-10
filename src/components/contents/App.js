import React from "react";

import Skeleton from "../feedback/Skeleton";

function AppContents(props) {
	console.log(props.data.status)
	// console.log(props.data.length)

	if (props.data.status === null) {
		return <Skeleton />;
	} else {
		return (
			<p>{props.data.title}</p>
		);
	}
}

export default AppContents;
