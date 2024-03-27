// NotificationPopup.js
import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink } from "./styles/UserNav.styled";
import axiosInstance from "../config/axiosInstance";
import {
  NotificationBox,
  NotificationItem,
} from "./styles/NotificationPopup.styled";

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
  const [notifications, setNotifications] = useState([]);
  const username = localStorage.getItem("username");
  useEffect(() => {
    const formatDateTime = (dateTimeString) => {
      const dateTime = new Date(dateTimeString);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[dateTime.getMonth()];
      const day = dateTime.getDate();
      const year = dateTime.getFullYear();
      let hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const amPM = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const formattedTime = `${hours}:${minutes
        .toString()
        .padStart(2, "0")} ${amPM}`;
      return `${month} ${day}, ${year} at ${formattedTime}`;
    };

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
          message: `${event.title}`,
          time: `Starts at: ${formatDateTime(
            `${event.dateStart}T${event.timeStart}`
          )}`, // Combine dateStart and timeStart
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
        <NotificationsIcon style={{ color: "#6462F1" }} />
        Notifications
      </NavLink>

      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <NotificationBox>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <NotificationItem key={notification.id}>
                      <img
                        src="https://img.pikbest.com/templates/20230425/bg/cdcebbba5fc84.png!w700wp"
                        alt="https://img.lovepik.com/free-template/01/31/92/83J888piC7M6.jpg_master.jpg!detail808"
                      />
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
