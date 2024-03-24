import React from "react";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";
import EventCard from "./EventCard";
import { useState } from "react";
import { RedButton } from "./styles/Manage.styled";
import RequestList from "./RequestList";

const Manage = () => {
  const [guestRequests, setGuestRequests] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const handleAccept = (id) => {
    console.log(`Accepted guest request with id ${id}`);
    setGuestRequests(guestRequests.filter((guest) => guest.id !== id));
  };

  const handleDecline = (id) => {
    console.log(`Declined guest request with id ${id}`);
    setGuestRequests(guestRequests.filter((guest) => guest.id !== id));
  };
  return (
    <div>
      <UserNav />
      <Container></Container>
      <Container>
        <EventCard
          eventName="Birthday Party"
          dateStarted="March 24, 2024"
          dateWillEnd="March 25, 2024"
          timeStarted="6:00 PM"
          timeWillEnd="11:00 PM"
          description="Come join us for a night of celebration and fun!"
        />
        <RedButton>Cancel Event</RedButton>
        <h1>Guest</h1>
        <RequestList />
      </Container>
    </div>
  );
};

export default Manage;
