import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
	ButtonContainer,
	StyledInput,
	ModalContainer,
	Image,
	ContentContainer,
	ParentContainer,
	EventContainer,
	EventDetail,
	EventName,
	EventDescription,
} from "./styles/Modal.styled";
import { Link } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const CustomModal = (props) => {
	const { event, open, setOpen, showJoin, showManage } = props;
	const [userReview, setUserReview] = useState("");
	const [reviews, setReviews] = useState(event.reviewList);

	const handleClose = () => {
		setOpen(false);
	};

	const handleReviewChange = (event) => {
		setUserReview(event.target.value);
	};

	const addUserReview = async () => {
		console.log(event.eventId);
		try {
			const response = await axiosInstance.post(
				`/users/event/${event.eventId}/review`,
				{
					username: localStorage.getItem("username"),
					comment: userReview,
				}
			);
			setReviews(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = () => {
		addUserReview();
	};

	const joinEvent = async () => {
		const username = localStorage.getItem("username");
		try {
			const response = await axiosInstance.post(
				`/users/join/${username}/${event.eventId}`
			);
			const responseDataString = JSON.stringify(response.data);
			if (responseDataString === "0") {
				alert("Failed to request");
			} else if (responseDataString === "1") {
				alert("Request to join the event.");
			} else {
				alert("You already requested. Waiting for approval...");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 800,
					height: 500,
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 2,
					overflowY: "auto",
				}}
			>
				<ModalContainer>
					<ParentContainer>
						<h1>Event Details</h1>
						<ContentContainer>
							<Image src="./images/join-event.svg" />
							<EventContainer>
								<EventDetail>
									<EventName>Event Name:</EventName> {event.title}
								</EventDetail>
								<EventDetail>
									<strong>Date Started:</strong> {event.dateStart}
								</EventDetail>
								<EventDetail>
									<strong>Date Will End:</strong> {event.dateEnd}
								</EventDetail>
								<EventDetail>
									<strong>Time Started:</strong> {event.timeStart}
								</EventDetail>
								<EventDetail>
									<strong>Time Will End:</strong> {event.timeEnd}
								</EventDetail>
								<EventDetail>
									<strong>Description:</strong>
									<EventDescription>{event.description}</EventDescription>
								</EventDetail>
							</EventContainer>
						</ContentContainer>
					</ParentContainer>
					{showJoin && (
						<ButtonContainer>
							<Button
								variant="contained"
								color="primary"
								sx={{ mt: 2 }}
								onClick={joinEvent}
							>
								Join
							</Button>
						</ButtonContainer>
					)}
					{showManage && (
						<ButtonContainer>
							<Link to={`/manage/${event.eventId}`}>
								<Button
									variant="contained"
									color="primary"
									sx={{ mt: 2 }}
									onClick={handleClose}
								>
									Manage
								</Button>
							</Link>
						</ButtonContainer>
					)}
					<StyledInput
						type="text"
						placeholder="Write your review here..."
						value={userReview}
						onChange={handleReviewChange}
					/>
					<Button
						sx={{ my: 2 }}
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Submit Review
					</Button>
					<br />
					<strong>User Reviews:</strong>
					<ul>
						{reviews.map((review, index) => (
							<li key={index}>
								<strong>{review.username}:</strong> {review.comment}
							</li>
						))}
					</ul>
				</ModalContainer>
			</Box>
		</Modal>
	);
};

export default CustomModal;
