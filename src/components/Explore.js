import Event from "./Event";
import React, { useState } from "react";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";

const Explore = () => {
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
        <h1>Explore</h1>
        <Event event={event} open={open} setOpen={setOpen} showButton={true} />
      </Container>
    </div>
  );
};

export default Explore;
