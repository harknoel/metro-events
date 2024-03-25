import React from "react";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";
import EventCard from "./EventCard";
import { RedButton } from "./styles/Manage.styled";
import RequestList from "./RequestList";
import verifyUser from "../helperFunctions";

const Manage = () => {
  verifyUser("ORGANIZER");

  const requests = [
    { id: 1, user: "Guest 1" },
    { id: 2, user: "Guest 2" },
    { id: 3, user: "Guest 3" },
  ];

  return (
    <div>
      <UserNav />
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
        <RequestList requests={requests} />
      </Container>
    </div>
  );
};

export default Manage;
