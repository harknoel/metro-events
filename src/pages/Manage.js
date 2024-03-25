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

	const acceptRequest = async (id) => {
		try {
			const response = await axiosInstance.post("/organizers/accept", {
				eventId: eventId,
				participantId: id,
			});
			console.log(response.data);
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
			console.log(response.data);
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
					dateStarted={dateStart}
					dateWillEnd={dateEnd}
					timeStarted={timeStart}
					timeWillEnd={timeEnd}
					description={description}
				/>
				<RedButton>Cancel Event</RedButton>

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
