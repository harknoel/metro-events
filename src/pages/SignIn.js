import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "../components/styles/themeConfig";
import { Link } from "react-router-dom";
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

const SignIn = () => {
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

	const onClickLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8080/api/v1/auth/login",
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

			if (response.data.jwt === "") {
				alert("Incorrect username or password.");
				return;
			}
			const role = response.data.user.authorities[0].authority;
			localStorage.setItem("role", role);
			localStorage.setItem("username", response.data.user.username);
			localStorage.setItem("token", response.data.jwt);
			console.log(response.data.jwt);
			if (role === "USER") {
				window.location.href = "/explore";
			} else if (role === "ORGANIZER") {
				window.location.href = "/organizer";
			} else if (role === "ADMIN") {
				window.location.href = "/admin";
			}
		} catch {}
	};
	return (
		<div>
			<ThemeProvider theme={themeConfig}>
				<StyledUserAuth>
					<form onSubmit={onClickLogin}>
						<InputContainer>
							<Image src="./images/logo.svg" alt="" />
							<div>
								<InputEmail
									type="text"
									placeholder="username"
									name="username"
									onChange={handleChange}
									onKeyDown={(event) => {
										if (event.key === " ") {
											event.preventDefault(); // Prevent space from being typed
										}
									}}
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
							<Button type="submit">SIGN IN</Button>
							<Signup>
								<span>
									<Link to="/signup">Sign up</Link> if you don't have an account
									yet.
								</span>
							</Signup>
						</InputContainer>
					</form>
				</StyledUserAuth>
			</ThemeProvider>
		</div>
	);
};

export default SignIn;
