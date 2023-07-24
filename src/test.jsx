import React, { useState, useEffect } from 'react';
function Test() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('../back/index.php')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			{data.map((item) => {
				console.log(item);
			})}
		</>
	);
}

export default Test;
