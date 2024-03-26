import React, { useEffect, useState } from "react";
import Event from "./Event";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import { CardContainer } from "../components/styles/UserEvents.styled";
import axiosInstance from "../config/axiosInstance";

const UserEvents = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState();

  const getAllEvents = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:8080/api/v1/users/allEvents"
      );
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  });

  return (
    <div>
      <UserNav />
      <Container>
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
      </Container>
    </div>
  );
};

export default UserEvents;
