import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "../components/styles/themeConfig";
import { Link } from "react-router-dom";
import {
  StyledUserAuth,
  Input,
  Button,
  Image,
  Signup,
  InputContainer,
} from "../components/styles/SignUp.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      alert(response.data);
      if (response.data === "success") {
        navigate("/signin");
      }
    } catch (error) {}
    console.log("done");
  };

  return (
    <div>
      <ThemeProvider theme={themeConfig}>
        <StyledUserAuth>
          <div>
            <Image src="./images/logo.svg" alt="" />
          </div>
          <InputContainer onSubmit={onClickSignUp}>
            <Input
              type="text"
              placeholder="Username"
              name="uname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === " ") {
                  event.preventDefault(); // Prevent space from being typed
                }
              }}
              required
            />
            <Input
              type="email"
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
            <Button type="submit">SIGN UP</Button>
            <Signup>
              <span>
                Already have an account? <Link to="/signin">Sign In</Link>
              </span>
            </Signup>
          </InputContainer>
        </StyledUserAuth>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
