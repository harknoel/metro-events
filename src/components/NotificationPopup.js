import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { StyledNotificationPopup } from "./styles/NotificationPopup.styled";
import NotificationsIcon from "@mui/icons-material/Notifications";

import axiosInstance from "../config/axiosInstance";

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getUserNotifications = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:8080/api/v1/users/allEvents"
        );
        const eventData = response.data; // Assuming response.data is an array of event objects
        const eventTitles = eventData.map((event) => event.title);
        const newNotifications = eventTitles.map((title, index) => ({
          id: index + 1,
          message: `New event: ${title}`,
        }));
        setNotifications(newNotifications);
      } catch (error) {
        console.error(error);
      }
    };

    getUserNotifications();
  }, []);

  return (
    <div>
      <NotificationsIcon
        style={{ color: "#6462F1" }}
        {...bindToggle(popupState)}
      />
      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <StyledNotificationPopup>
                {notifications.length > 0 ? (
                  <ul>
                    {notifications.map((notification) => (
                      <li key={notification.id}>{notification.message}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No new notifications</p>
                )}
              </StyledNotificationPopup>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default NotificationPopup;
