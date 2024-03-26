// NotificationPopup.js
import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";

import axiosInstance from "../config/axiosInstance";
import { NotificationBox } from "./styles/NotificationPopup.styled"; // Assuming you have a NotificationBox styled component

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
  const [notifications, setNotifications] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const getUserNotifications = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:8080/api/v1/users/allEvents"
        );
        const eventData = response.data; // Assuming response.data is an array of event objects
        const filteredEvents = eventData.filter((event) =>
          event.participantList.some(
            (participant) => participant.username === username
          )
        );
        const eventTitles = filteredEvents.map((event) => event.title);
        const newNotifications = eventTitles.map((title, index) => ({
          id: index + 1,
          message: `New event: ${title}`,
        }));
        setNotifications(newNotifications);
      } catch (error) {
        console.error(error);
      }
    };

    if (username) {
      getUserNotifications();
    }
  }, [username]);

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
              <NotificationBox>
                {notifications.length > 0 ? (
                  <ul>
                    {notifications.map((notification) => (
                      <li key={notification.id}>{notification.message}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No new notifications</p>
                )}
              </NotificationBox>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default NotificationPopup;
