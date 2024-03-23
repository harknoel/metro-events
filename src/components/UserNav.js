import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  NavLink,
} from "./styles/UserNav.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <StyledUserNav>
      <Container>
        <Header>
          <Logo src="./images/logo.svg" alt=""></Logo>
          <Nav>
            <div>
              <NavLink to="/userevents">My Events</NavLink>
            </div>
            <div>
              <NavLink to="/explore">Explore</NavLink>
            </div>
            <div>
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </Nav>
        </Header>
      </Container>
    </StyledUserNav>
  );
};

export default UserNav;
