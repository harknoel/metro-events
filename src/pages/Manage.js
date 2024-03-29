import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import EventCard from "../components/EventCard";
import RequestList from "../components/RequestList";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import { CancelEvent } from "../components/CancelEvent";
import { Divider, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

const Manage = () => {
  let { eventId } = useParams();

  const [event, setEventId] = useState("");
  const [active, setActive] = useState(true);
  const [dateEnd, setDateEnd] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [description, setDescription] = useState("");
  const [eventDateTimeCreated, setEventDateTimeCreated] = useState("");
  const [owner, setOwner] = useState("");
  const [participantList, setParticipantList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [timeEnd, setTimeEnd] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [title, setTitle] = useState("");

  const setDetails = (result) => {
    const participants = result.participantList;
    setActive(result.active);
    setDateEnd(result.dateEnd);
    setDateStart(result.dateStart);
    setDescription(result.description);
    setEventDateTimeCreated(result.eventDateTimeCreated);
    setOwner(result.owner);
    setParticipantList(
      participants.filter((partcipant) => partcipant.status === 0)
    );
    setReviewList(result.reviewList);
    setTimeEnd(result.timeEnd);
    setTimeStart(result.timeStart);
    setTitle(result.title);
    console.log(participants);
  };

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `organizers/event/details/${eventId}`
        );
        setDetails(response.data);
      } catch (error) {}
    };
    getEventDetails();
  }, [eventId]);

  const acceptRequest = async (id) => {
    try {
      const response = await axiosInstance.post("/organizers/accept", {
        eventId: eventId,
        participantId: id,
      });
      setParticipantList(
        response.data.filter((partcipant) => partcipant.status === 0)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const declineRequest = async (id) => {
    try {
      const response = await axiosInstance.post("/organizers/decline", {
        eventId: eventId,
        participantId: id,
      });
      setParticipantList(
        response.data.filter((partcipant) => partcipant.status === 0)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UserNav />
      <Container>
        <EventCard
          eventName={title}
          organizer={owner}
          dateStarted={dateStart}
          dateWillEnd={dateEnd}
          timeStarted={timeStart}
          timeWillEnd={timeEnd}
          description={description}
        />
        <CancelEvent eventId={eventId} eventName={title}></CancelEvent>
      </Container>
      <Divider sx={{ mt: 3 }}></Divider>
      <Container>
        <h1>Reminder</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Textarea
            color="neutral"
            disabled={false}
            minRows={4}
            placeholder="Type your reminder here..."
            size="lg"
            variant="soft"
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Add reminder
          </Button>
        </form>
      </Container>
      <Divider sx={{ mt: 3 }}></Divider>
      <Container>
        <h1>Guest</h1>
        <RequestList
          requests={participantList}
          acceptRequest={acceptRequest}
          declineRequest={declineRequest}
        />
      </Container>
    </div>
  );
};

export default Manage;
