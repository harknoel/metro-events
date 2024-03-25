import React, { useEffect, useState } from "react";
import UserNav from "../components/UserNav";
import Container from "../components/styles/Container.styled";
import EventCard from "../components/EventCard";
import { RedButton } from "../components/styles/Manage.styled";
import RequestList from "../components/RequestList";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const Manage = () => {
	let { eventId } = useParams();
	const requests = [
		{ id: 1, user: "Guest 1" },
		{ id: 2, user: "Guest 2" },
		{ id: 3, user: "Guest 3" },
	];
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
		setActive(result.active);
		setDateEnd(result.dateEnd);
		setDateStart(result.dateStart);
		setDescription(result.description);
		setEventDateTimeCreated(result.eventDateTimeCreated);
		setOwner(result.owner);
		setParticipantList(result.participantList);
		setReviewList(result.reviewList);
		setTimeEnd(result.timeEnd);
		setTimeStart(result.timeStart);
		setTitle(result.title);
	};

	const getEventDetails = async () => {
		try {
			const response = await axiosInstance.get(
				`organizers/event/details/${eventId}`
			);
			setDetails(response.data);
		} catch (error) {}
	};

	useEffect(() => {
		getEventDetails();
	});

	return (
		<div>
			<UserNav />
			<Container>
				<EventCard
					eventName={title}
					dateStarted={dateStart}
					dateWillEnd={dateEnd}
					timeStarted={timeStart}
					timeWillEnd={timeEnd}
					description={description}
				/>
				<RedButton>Cancel Event</RedButton>

				<h1>Guest</h1>
				<RequestList requests={participantList} eventId={eventId} />
			</Container>
		</div>
	);
};

export default Manage;
