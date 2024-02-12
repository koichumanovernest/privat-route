import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const url = import.meta.env.VITE_BACKEND_URL;

const Header = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [userProfile, setUserProfile] = useState({});
	const links = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Login",
			href: "/login",
		},
		{
			name: "Registration",
			href: "/registration",
		},
	];

	const getUserId = localStorage.getItem("isAuth");

	const getUserProfile = async () => {
		try {
			const response = await axios.get(url);
			const responseData = await response.data;

			if (getUserId) {
				const findUser = responseData.find((item) => item._id === +getUserId);
				setUserProfile(findUser);
			} else {
				console.log("user is not auth");
			}
		} catch (e) {
			console.error(e);
		}
	};

	const removeUserSession = () => {
		localStorage.removeItem("isAuth");
		setUserProfile({});
		navigate("/login");
	};
	useEffect(() => {
		getUserProfile();
	}, [pathname]);
	return (
		<header>
			<div className={scss.container5}>
				<div className={scss.homePage}>
					{links.map((item, index) => (
						<Link key={index} to={item.href}>
							{item.name}
						</Link>
					))}
				</div>
				<div className={scss.content1}>
					<h1>{userProfile.login}</h1>
					<h1>{userProfile.password}</h1>
					<button onClick={removeUserSession}>exit</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
