import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

function HomePage223(props) {


	console.log(location, " useLocation Hook");
	const data = location.state?.data;

	return (
		<>
			<div className="content">
				ывфв
			</div>
		</>
	);
}

export default HomePage223;
