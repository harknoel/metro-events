import Event from "./Event";
import React, { useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import CenterDiv from "../components/styles/CenterDiv";
import { CardContainer } from "../components/styles/UserEvents.styled";
import axiosInstance from "../config/axiosInstance";

const Explore = () => {
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
      <CenterDiv>
        <h1>Explore</h1>
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

export default Explore;
