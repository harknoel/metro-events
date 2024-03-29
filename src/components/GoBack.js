import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt=""></Logo>
          <Link to="/">
            <Button style={{ backgroundColor: "#6462f1" }}>Go Back</Button>
          </Link>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default GoBack;
