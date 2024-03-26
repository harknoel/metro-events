// NotificationPopup.js
import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";

import axiosInstance from "../config/axiosInstance";
import {
  NotificationBox,
  NotificationItem,
} from "./styles/NotificationPopup.styled";

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
        const newNotifications = filteredEvents.map((event, index) => ({
          id: index + 1,
          message: `New event: ${event.title}`,
          time: `Starts at: ${event.dateStart} at ${event.timeStart}`, // Combine dateStart and timeStart
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
                  notifications.map((notification) => (
                    <NotificationItem key={notification.id}>
                      <NotificationsIcon style={{ color: "#6462F1" }} />
                      <div className="notification-content">
                        <div className="notification-text">
                          {notification.message}
                        </div>
                        <div className="notification-time">
                          {notification.time}
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
    </div>
  );
};

export default NotificationPopup;
