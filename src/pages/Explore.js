import Event from "./Event";
import React, { useState, useEffect } from "react";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import axios from "axios";
import { CardContainer } from "../components/styles/UserEvents.styled";

const Explore = () => {
	const [open, setOpen] = useState(false);
	const [events, setEvents] = useState();

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
				<h1>Explore</h1>
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

export default Explore;
