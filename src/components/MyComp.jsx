import { useState } from "react";

const MyComp = () => {
	const [n, setN] = useState(100);
	return (
		<>
			<p>Your number is: {n}</p>
			<button onClick={() => setN(n + 1)}>Increment</button>
		</>
	);
}

export default MyComp;