import React, { useState } from "react";
import Event from "./Event";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";

const UserEvents = () => {
  const [open, setOpen] = useState(false);

  const event = {
    title: "Sample Event",
    organizer: "John Doe",
    dateStarted: "2024-03-23",
    timeStarted: "10:00 AM",
    description: "This is a sample event description.",
    dateEnded: "2024-03-23",
    timeEnded: "12:00 PM",
  };
  return (
    <div>
      <UserNav />
      <Container>
        <h1>My Joined Events</h1>
        <Event event={event} open={open} setOpen={setOpen} showButton={false} />
      </Container>
    </div>
  );
};

export default UserEvents;
