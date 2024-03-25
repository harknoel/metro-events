import Event from "./Event";
import React, { useState, useContext, useEffect } from "react";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CardContainer } from "./styles/UserEvents.styled";

const Explore = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [events, setEvents] = useState();

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
      </Container>
    </div>
  );
};

export default Explore;
