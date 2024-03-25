import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import axiosInstance from "../config/axiosInstance";

const style = {
	p: 0,
	width: "100%",
	maxWidth: "100%",
	borderRadius: 2,
	border: "1px solid",
	borderColor: "divider",
	backgroundColor: "background.paper",
};

const RequestList = (props) => {
	const { requests, eventId } = props;

	const acceptParticipant = async (id) => {
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

	const declineParticipant = async (id) => {
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

	const handleAccept = (id) => {
		acceptParticipant(id);
	};

	const handleDecline = (id) => {
		declineParticipant(id);
	};
	return (
		<List sx={style} aria-label="guest requests">
			{requests.map(
				(request) =>
					request.status === 0 && (
						<React.Fragment key={request.participantId}>
							<ListItem>
								<ListItemText primary={request.username} />
								<Button
									size="small"
									color="primary"
									onClick={() => handleAccept(request.participantId)}
								>
									Accept
								</Button>
								<Button
									size="small"
									color="error"
									onClick={() => handleDecline(request.participantId)}
								>
									Decline
								</Button>
							</ListItem>
							<Divider component="li" />
						</React.Fragment>
					)
			)}
		</List>
	);
};

export default RequestList;
