import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  CreateEventButton,
  OrganizerContainer,
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
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PopperTicket from "./PopperTicket";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { StyledNavLink, PopupContainer, NavPage } from "./styles/Nav.styled";
import { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

const UserNav = () => {
  const [invisible, setInvisible] = useState(true);

  const checkUserNotification = async () => {
    try {
      const response = await axiosInstance.get(
        `/users/notification/${localStorage.getItem("username")}/checkIsSeen`
      );
      setInvisible(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkUserNotification();
    const intervalId = setInterval(checkUserNotification, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
                    bindToggle={bindToggle}
                    bindPopper={bindPopper}
                    popupState={popupState}
                    invisible={invisible}
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
                              <RedButton
                                onClick={() => {
                                  localStorage.clear();
                                  window.location.href = "/signin";
                                  popupState.close();
                                }}
                              >
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
            </PopupContainer>
          </Nav>
        </Header>
      </Container>
    </StyledUserNav>
  );
};

export default UserNav;
