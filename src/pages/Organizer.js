import React from "react";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import { CardContainer } from "../components/styles/UserEvents.styled";
import { useState, useEffect } from "react";
import Event from "./Event";
import axiosInstance from "../config/axiosInstance";

const Organizer = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();

	const getAllEvents = async () => {
		const username = localStorage.getItem("username");
		try {
			const response = await axiosInstance.get(
				`http://localhost:8080/api/v1/users/organizer/${username}`
			);
			setEvents(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllEvents();
	});

	return (
		<div>
			<UserNav />
			<Container>
				<h1>My Events</h1>
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

export default Organizer;
