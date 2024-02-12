import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const url = import.meta.env.VITE_BACKEND_URL;
const HomePage = () => {
	const [state, setState] = useState([]);
	const getUsers = async () => {
		try {
			const response = await axios.get(url);
			setState([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteInput = async (id) => {
		const response = await axios.delete(`${url}/${id}`);
		setState(response.data);
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className="container4">
			{state.map((item, index) => (
				<div key={index}>
					<p>{item.login}</p>
					<p>{item.password}</p>
					<button onClick={() => deleteInput(item._id)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default HomePage;
