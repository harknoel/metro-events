import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  NavLink,
  CreateEventButton,
  SearchBar,
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
import PersonIcon from "@mui/icons-material/Person";
import PopperTicket from "./PopperTicket";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";

const UserNav = () => {
  const navigate = useNavigate();

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

          {/* Add search bar */}
          <SearchBar type="text" placeholder="Search events..." />

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
                  <NavLink to="/organizer">My Events</NavLink>
                </OrganizerContainer>
              )}
            </div>

            <NavLink
              to="/userevents"
              style={{
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "#6462f1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <EventIcon style={{ marginBottom: "5px" }} />
                <span style={{ marginTop: "auto" }}>MyEvents</span>
              </div>
            </NavLink>

            <div>
              <NavLink
                to="/explore"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#6462f1",
                }}
              >
                <ExploreIcon style={{ marginBottom: "5px" }} />
                Explore
              </NavLink>
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
            {localStorage.getItem("role") === "USER" && (
              <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                  <PopperTicket
                    bindToggle={bindToggle}
                    bindPopper={bindPopper}
                    popupState={popupState}
                  />
                )}
              </PopupState>
            )}
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <NavLink
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#6462f1",
                    }}
                    {...bindToggle(popupState)}
                  >
                    <PersonIcon style={{ color: "#6462F1" }} />
                    Account
                  </NavLink>

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
          </Nav>
        </Header>
      </Container>
    </StyledUserNav>
  );
};

export default UserNav;
