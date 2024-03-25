import React, { useEffect, useState } from "react";
import Event from "./Event";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import { CardContainer } from "../components/styles/UserEvents.styled";
import axios from "axios";

const UserEvents = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();

	console.log(localStorage.getItem("username"));

	const getAllEvent = async () => {
		try {
			const token = localStorage.getItem("token");
			console.log("hello");

			const response = await axios.get("/users/allEvents", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setEvents(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllEvent();
	}, []);

	return (
		<div>
			<UserNav />
			<Container>
				<h1>My Joined Events</h1>
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

export default UserEvents;
