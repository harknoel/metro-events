import React, { useState } from "react";
import UserNav from "./UserNav";
import { StyledUserEvents, CardContainer } from "./styles/UserEvents.styled";
import Container from "./styles/Container.styled";
import Card from "./Card";
import CustomModal from "./CustomModal";

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
    <StyledUserEvents>
      <UserNav />
      <Container>
        <h1>My Joined Events</h1>
        <CardContainer>
          <Card event={event} setOpen={setOpen} />
        </CardContainer>
      </Container>
      <CustomModal
        event={event}
        open={open}
        setOpen={setOpen}
        showButton={true}
      />
    </StyledUserEvents>
  );
};

export default UserEvents;
