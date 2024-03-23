import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  NavLink,
  CreateEventButton,
} from "./styles/UserNav.styled";
import Container from "./styles/Container.styled";

const UserNav = () => {
  return (
    <StyledUserNav>
      <Container>
        <Header>
          <Logo src="./images/logo.svg" alt=""></Logo>
          <Nav>
            <div>
              <CreateEventButton>Create Event</CreateEventButton>
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
