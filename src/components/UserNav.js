import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  NavLink,
  CreateEventButton,
} from "./styles/UserNav.styled";
import Container from "./styles/Container.styled";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <StyledUserNav>
      <Container>
        <Header>
          <Link to="/userevents">
            <Logo src="./images/logo.svg" alt=""></Logo>
          </Link>
          <Nav>
            <div>
              <Link to="/createevent">
                <CreateEventButton>Create Event</CreateEventButton>
              </Link>
            </div>
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
