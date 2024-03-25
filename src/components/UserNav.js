import {
  StyledUserNav,
  Header,
  Logo,
  Nav,
  NavLink,
  CreateEventButton,
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
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ConfirmationPopup from "./styles/ConfirmationPopup";

const UserNav = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, message: "Notification 1" },
    { id: 2, message: "Notification 2" },
  ];

  const requestRole = [
    { id: 1, message: "Request to be Admin" },
    { id: 2, message: "Request to be Organizer" },
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
              <Link to="/createevent" style={{ textDecoration: "none" }}>
                <CreateEventButton>
                  <AddIcon style={{ color: "white" }} />
                  Create Event
                </CreateEventButton>
              </Link>
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

            <div>
              <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                  <ConfirmationPopup
                    bindToggle={bindToggle}
                    bindPopper={bindPopper}
                    popupState={popupState}
                  />
                )}
              </PopupState>
            </div>

            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <PersonIcon
                    style={{ color: "#6462F1" }}
                    {...bindToggle(popupState)}
                  />
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
                                  navigate("/signin");
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
