import React, { useEffect, useState } from "react";
import Event from "./Event";
import UserNav from "../components/UserNav";

import CenterDiv from "../components/styles/CenterDiv";
import { CardContainer } from "../components/styles/UserEvents.styled";
import axiosInstance from "../config/axiosInstance";

const UserEvents = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState();

  const getAllUserEvents = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await axiosInstance.get(
        `http://localhost:8080/api/v1/users/events/${username}`
      );
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUserEvents();
  });

  return (
    <div>
      <UserNav />
      <CenterDiv>
        <h1>My Joined Events</h1>
        <CardContainer>
          {events &&
            events.map((event) => (
              <Event
                key={event.eventId}
                event={event}
                open={open}
                setOpen={setOpen}
                showJoin={true}
                showManage={true}
              />
            ))}
        </CardContainer>
      </CenterDiv>
    </div>
  );
};

export default UserEvents;
