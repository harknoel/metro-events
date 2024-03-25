import React, { useContext, useEffect, useState } from "react";
import Event from "./Event";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";
import axios from "axios";
import verifyUser from "../helperFunctions";

const UserEvents = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();

	verifyUser("USER");

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
			</Container>
		</div>
	);
	return (
		<div>
			<UserNav />
			<Container>
				<h1>My Joined Events</h1>
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
			</Container>
		</div>
	);
};

export default UserEvents;
