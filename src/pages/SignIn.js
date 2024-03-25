import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "../components/styles/themeConfig";
import { Link, useNavigate } from "react-router-dom";
import {
	StyledUserAuth,
	InputEmail,
	InputPassword,
	Button,
	Image,
	Signup,
	InputContainer,
} from "../components/styles/UserAuth.styled";
import axios from "axios";
import { UserContext } from "../App";

const SignIn = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onClickLogin = async () => {
		try {
			const response = await axios.post(
				"/auth/login",
				{
					username: formData.username,
					password: formData.password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setUser(response.data);
			console.log(user);

			if (response.data.jwt !== "") {
				localStorage.setItem("username", response.data.user.username);
				localStorage.setItem("token", response.data.jwt);
				navigate("/userevents");
			} else {
				alert("Incorrect username or password.");
			}
		} catch {}
	};
	return (
		<div>
			<ThemeProvider theme={themeConfig}>
				<StyledUserAuth>
					<InputContainer>
						<Image src="./images/logo.svg" alt="" />
						<div>
							<InputEmail
								type="text"
								placeholder="username"
								name="username"
								onChange={handleChange}
								required
							/>
							<InputPassword
								type="password"
								placeholder="password"
								name="password"
								onChange={handleChange}
								required
							/>
						</div>
						<Button onClick={onClickLogin}>SIGN IN</Button>
						<Signup>
							<span>
								<Link to="/signup">Sign up</Link> if you don't have an account
								yet.
							</span>
						</Signup>
					</InputContainer>
				</StyledUserAuth>
			</ThemeProvider>
		</div>
	);
};

export default SignIn;