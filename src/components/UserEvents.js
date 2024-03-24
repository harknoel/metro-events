import React, { useContext, useState, useEffect } from "react";
import Event from "./Event";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import verifyUser from "../helperFunctions";

const UserEvents = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();

  verifyUser("USER")

  const event = {
    title: "Sample Event",
    organizer: "John Doe",
    dateStarted: "2024-03-23",
    timeStarted: "10:00 AM",
    description: "This is a sample event description.",
    dateEnded: "2024-03-23",
    timeEnded: "12:00 PM",
    reviews: [
      { user: "Alice", comment: "Great event! Enjoyed it a lot." },
      { user: "Bob", comment: "Excellent organization and venue." },
      { user: "Charlie", comment: "The event exceeded my expectations." },
    ],
  };

  return (
    <div>
      <UserNav />
      <Container>
        <h1>My Joined Events</h1>
        <Event
          event={event}
          open={open}
          setOpen={setOpen}
          showJoin={true}
          showManage={true}
        />
      </Container>
    </div>
  );
};

export default UserEvents;
