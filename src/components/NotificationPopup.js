// NotificationPopup.js
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { StyledNavLink } from "./styles/Nav.styled";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import NotificationListItem from "./NotificationListItem";
import { Divider } from "@mui/material";

import { NotificationBox } from "./styles/NotificationPopup.styled";

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
  //   const [notifications, setNotifications] = useState([]);
  const notifications = [
    { title: "New Message", content: "You have a new message from John Doe" },
    { title: "Reminder", content: "Don't forget your meeting at 2 PM" },
  ];
  return (
    <div>
      <StyledNavLink {...bindToggle(popupState)}>
        <Badge color="secondary" variant="dot" invisible={false}>
          <NotificationsIcon style={{ color: "#6462F1" }} />
        </Badge>
        Notifications
      </StyledNavLink>

      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <NotificationBox>
                <List>
                  {notifications.map((notification, index) => (
                    <div key={notification.title}>
                      <NotificationListItem notification={notification} />
                      {index < notifications.length - 1 && <Divider />}
                    </div>
                  ))}
                </List>
              </NotificationBox>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default NotificationPopup;
