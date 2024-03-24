import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "./styles/themeConfig";
import { Link } from "react-router-dom";
import {
	StyledUserAuth,
	Input,
	Button,
	Image,
	Signup,
} from "./styles/SignUp.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const onClickSignUp = async () => {
		try {
			const response = await axios.post("/auth/signup", {
				username: username,
				email: email,
				password: password,
			});
			alert(response.data);
			if (response.data === "success") {
				navigate("/signin");
			}
		} catch (error) {}
	};
	return (
		<div>
			<ThemeProvider theme={themeConfig}>
				<StyledUserAuth>
					<div>
						<Image src="./images/logo.svg" alt="" />
					</div>
					<Input
						type="text"
						placeholder="Username"
						name="uname"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<Input
						type="text"
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<Input
						type="password"
						placeholder="Password"
						name="psw"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button onClick={onClickSignUp}>SIGN UP</Button>
					<Signup>
						<span>
							Already have an account? <Link to="/signin">Sign In</Link>
						</span>
					</Signup>
				</StyledUserAuth>
			</ThemeProvider>
		</div>
	);
};

export default SignUp;
