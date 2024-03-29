import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import EventCard from "../components/EventCard";
import RequestList from "../components/RequestList";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import { CancelEvent } from "../components/CancelEvent";
import { Divider, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GuestList from "../components/GuestList";

const Manage = () => {
  let { eventId } = useParams();

  const [dateEnd, setDateEnd] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [participantList, setParticipantList] = useState([]);
  const [activeParticipantList, setActiveParticipantList] = useState([]);
  const [timeEnd, setTimeEnd] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [title, setTitle] = useState("");

  const setDetails = (result) => {
    const participants = result.participantList;
    setDateEnd(result.dateEnd);
    setDateStart(result.dateStart);
    setDescription(result.description);
    setOwner(result.owner);
    setParticipantList(
      participants.filter((partcipant) => partcipant.status === 0)
    );
    setActiveParticipantList(
      participants.filter((participant) => participant.status === 1)
    );
    setTimeEnd(result.timeEnd);
    setTimeStart(result.timeStart);
    setTitle(result.title);
    console.log(participants);
  };

  const [reminderText, setReminderText] = useState("");

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
      setActiveParticipantList(
        response.data.filter((participant) => participant.status === 1)
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
      setActiveParticipantList(
        response.data.filter((participant) => participant.status === 1)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addReminder = async (reminderText) => {
    try {
      await axiosInstance.get(
        `users/notification/${eventId}/${reminderText}/reminder`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            addReminder(reminderText);
            setReminderText("");
            alert("Reminder successfully sent.");
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
            value={reminderText}
            onChange={(event) => setReminderText(event.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Add reminder
          </Button>
        </form>
      </Container>
      <Divider sx={{ mt: 3 }}></Divider>
      <Container>
        <Box sx={{ mt: 1, width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="organizer tabs">
                <Tab label="Requests" value="1" />
                <Tab label="Guest List" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <h1>Guest's Request</h1>
              <RequestList
                requests={participantList}
                acceptRequest={acceptRequest}
                declineRequest={declineRequest}
              />
            </TabPanel>
            <TabPanel value="2">
              <h1>Guest List</h1>
              <GuestList requests={activeParticipantList}></GuestList>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
};

export default Manage;
