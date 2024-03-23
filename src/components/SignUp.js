import React from "react";
import { ThemeProvider } from "styled-components";
import themeConfig from "./styles/themeConfig";
import { Link } from "react-router-dom";
import {
  StyledUserAuth,
  Form,
  Input,
  Button,
  Image,
  Signup,
} from "./styles/SignUp.styled";

const SignUp = () => {
  return (
    <div>
      <ThemeProvider theme={themeConfig}>
        <StyledUserAuth>
          <div>
            <Image src="./images/logo.svg" alt="" />
          </div>
          <Form>
            <Input type="text" placeholder="Username" name="uname" required />
            <Input type="text" placeholder="Email" name="email" required />
            <Input type="password" placeholder="Password" name="psw" required />
            <Input
              type="password"
              placeholder="Confirm Password"
              name="psw"
              required
            />
            <Button type="submit">SIGN UP</Button>
            <Signup>
              <span>
                Already have an account? <Link to="/signin">Sign In</Link>
              </span>
            </Signup>
          </Form>
        </StyledUserAuth>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
