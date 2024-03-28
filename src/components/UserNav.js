import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  CreateEventButton,
  OrganizerContainer,
} from "./styles/UserNav.styled";
import Container from "./styles/Container.styled";
import { Link, useNavigate } from "react-router-dom";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { RedButton } from "./styles/Manage.styled";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationPopup from "./NotificationPopup";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PopperTicket from "./PopperTicket";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { StyledNavLink, PopupContainer, NavPage } from "./styles/Nav.styled";

const UserNav = () => {
  const notifications = [
    { id: 1, message: "Notification 1" },
    { id: 2, message: "Notification 2" },
  ];

  return (
    <StyledUserNav>
      <Container>
        <Header>
          <Link to="/userevents">
            <Logo src="../images/logo.svg" alt=""></Logo>
          </Link>
          <Nav>
            <div>
              {localStorage.getItem("role") === "ORGANIZER" && (
                <OrganizerContainer>
                  <Link to="/createevent" style={{ textDecoration: "none" }}>
                    <CreateEventButton>
                      <AddIcon style={{ color: "white" }} />
                      Create Event
                    </CreateEventButton>
                  </Link>
                  <StyledNavLink to="/organizer">
                    <EventIcon />
                    My Events
                  </StyledNavLink>
                </OrganizerContainer>
              )}
            </div>
            <NavPage>
              <StyledNavLink to="/userevents">
                <EventAvailableIcon />
                Joined Events
              </StyledNavLink>
              <StyledNavLink to="/explore">
                <ExploreIcon />
                Explore
              </StyledNavLink>
            </NavPage>
            <PopupContainer>
              <PopupState variant="popper">
                {(popupState) => (
                  <NotificationPopup
                    notifications={notifications}
                    bindToggle={bindToggle}
                    bindPopper={bindPopper}
                    popupState={popupState}
                  />
                )}
              </PopupState>
              {localStorage.getItem("role") === "USER" && (
                <PopupState variant="popper">
                  {(popupState) => (
                    <PopperTicket
                      bindToggle={bindToggle}
                      bindPopper={bindPopper}
                      popupState={popupState}
                    />
                  )}
                </PopupState>
              )}
              <PopupState variant="popper">
                {(popupState) => (
                  <div>
                    <StyledNavLink {...bindToggle(popupState)}>
                      <AccountCircleIcon />
                      Account
                    </StyledNavLink>
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
                              <a>
                                <RedButton
                                  onClick={() => {
                                    localStorage.clear();
                                    window.location.href = "/signin";
                                    popupState.close();
                                  }}
                                >
                                  Logout
                                </RedButton>
                              </a>
                            </Paper>
                          </Fade>
                        </ClickAwayListener>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
            </PopupContainer>
          </Nav>
        </Header>
      </Container>
    </StyledUserNav>
  );
};

export default UserNav;
