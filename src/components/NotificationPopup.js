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
import { useState, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

const NotificationPopup = ({
  bindToggle,
  bindPopper,
  popupState,
  invisible,
}) => {
  const [notifications, setNotifications] = useState(null);

  const getAllUserNotification = async () => {
    try {
      const response = await axiosInstance.get(
        `/users/notifications/${localStorage.getItem("username")}`
      );
      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const setNotificationIsSeen = async () => {
    try {
      const response = await axiosInstance.get(
        `/users/notifaction/${localStorage.getItem("username")}/IsSeen`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUserNotification();
    if (popupState.isOpen) {
      setNotificationIsSeen();
    }
    const intervalId = setInterval(getAllUserNotification, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [popupState.isOpen]);

  return (
    <div>
      <StyledNavLink {...bindToggle(popupState)}>
        <Badge color="secondary" variant="dot" invisible={invisible}>
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
                    <div key={index}>
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
