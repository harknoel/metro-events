import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  StyledNavLink,
  PopupContainer,
  NotificationCounter,
} from "./styles/Nav.styled";
import {
  NotificationBox,
  NotificationItem,
} from "./styles/NotificationPopup.styled";
import axiosInstance from "../config/axiosInstance";

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const getAllNotifications = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await axiosInstance.get(
        `http://localhost:8080/api/v1/users/events/${username}`
      );
      setNotifications(response.data);
      setNotificationCount(response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <PopupContainer>
      <StyledNavLink {...bindToggle(popupState)}>
        <NotificationsIcon style={{ color: "#6462F1" }} />
        {notificationCount > 0 && (
          <NotificationCounter>{notificationCount}</NotificationCounter>
        )}
        Notifications
      </StyledNavLink>

      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <NotificationBox>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <NotificationItem key={notification.id}>
                      <div key={notification.eventId}>
                        <div className="notification-content">
                          <div className="notification-text">
                            <strong>You have an upcoming event </strong>
                            <div className="notification-time">
                              <span>
                                <strong>{notification.title}</strong> -{" "}
                                {notification.dateStart} at{" "}
                                {notification.timeStart}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NotificationItem>
                  ))
                ) : (
                  <p>No new notifications</p>
                )}
              </NotificationBox>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </PopupContainer>
  );
};

export default NotificationPopup;
