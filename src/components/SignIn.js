import React from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "./styles/themeConfig";
import { Link } from "react-router-dom";
import {
  StyledUserAuth,
  Form,
  InputEmail,
  InputPassword,
  Button,
  Image,
  Signup,
} from "./styles/UserAuth.styled";
import axios from "axios";

const SignIn = () => {
  const onClickLogin = async () => {
    try {
      const response = await axios.post(
        "/login",
        {
          username: "normal",
          password: "normal",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch {}
  };

  onClickLogin();
  return (
    <div>
      <ThemeProvider theme={themeConfig}>
        <StyledUserAuth>
          <Form>
            <Image src="./images/logo.svg" alt="" />
            <div>
              <InputEmail
                type="text"
                placeholder="email"
                name="uname"
                required
              />
              <InputPassword
                type="password"
                placeholder="password"
                name="psw"
                required
              />
            </div>
            <Link to="/userevents">
              <Button type="submit">SIGN IN</Button>
            </Link>
            <Signup>
              <span>
                <Link to="/signup">Sign up</Link> if you don't have an account
                yet.
              </span>
            </Signup>
          </Form>
        </StyledUserAuth>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
