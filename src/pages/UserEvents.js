import React, { useContext, useEffect, useState } from "react";
import Event from "./Event";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "../components/styles/UserEvents.styled";

const UserEvents = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState();
  const { user, setUser } = useContext(UserContext);

  let role = null;
  if (user !== null) {
    role = user.user.authorities[0].authority;
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (user == null || (role !== "USER" && role !== "ORGANIZER")) {
      navigate("/signin");
    }
  }, [user, navigate]);

  console.log(localStorage.getItem("username"));

  const getAllEvent = async () => {
    try {
      const response = await axios.get("/users/allEvents");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(events);
  }, [events]);

  useEffect(() => {
    getAllEvent();
  }, []);

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
