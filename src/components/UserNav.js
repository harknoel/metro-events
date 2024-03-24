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
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { RedButton } from "./styles/Manage.styled";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationPopup from "./NotificationPopup";
import { useContext } from "react";
import { UserContext } from "../App";

const UserNav = () => {
  const { user, setUser } = useContext(UserContext);

  const notifications = [
    { id: 1, message: "Notification 1" },
    { id: 2, message: "Notification 2" },
  ];
  return (
    <StyledUserNav>
      <Container>
        <Header>
          <Link to="/userevents">
            <Logo src="./images/logo.svg" alt=""></Logo>
          </Link>
          <Nav>
            <div>
              {user &&
                user.user &&
                user.user.authorities &&
                user.user.authorities.length > 0 &&
                user.user.authorities[0].authority === "ORGANIZER" && (
                  <Link to="/createevent">
                    <CreateEventButton>Create Event</CreateEventButton>
                  </Link>
                )}
            </div>
            <div>
              <NavLink to="/userevents">My Events</NavLink>
            </div>
            <div>
              <NavLink to="/explore">Explore</NavLink>
            </div>
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <NotificationPopup
                  notifications={notifications}
                  bindToggle={bindToggle}
                  bindPopper={bindPopper}
                  popupState={popupState}
                />
              )}
            </PopupState>
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <span
                    className="material-symbols-outlined"
                    {...bindToggle(popupState)}
                  >
                    account_circle
                  </span>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <ClickAwayListener onClickAway={popupState.close}>
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper
                            sx={{
                              p: 2,
                              maxWidth: 200,
                            }}
                          >
                            <RedButton onClick={popupState.close}>
                              Logout
                            </RedButton>
                          </Paper>
                        </Fade>
                      </ClickAwayListener>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </Nav>
        </Header>
      </Container>
    </StyledUserNav>
  );
};

export default UserNav;
