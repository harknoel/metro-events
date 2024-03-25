import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const style = {
	p: 0,
	width: "100%",
	maxWidth: "100%",
	borderRadius: 5,
	border: "1px solid",
	borderColor: "divider",
	backgroundColor: "background.paper",
	boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
	padding: 1,
};

const RequestList = (props) => {
	const { requests, acceptRequest, declineRequest } = props;

	const handleAccept = (id) => {
		acceptRequest(id);
	};

	const handleDecline = (id) => {
		declineRequest(id);
	};

	return (
		<List sx={style} aria-label="guest requests">
			<ListItem
				sx={{
					borderTopLeftRadius: "10px",
					borderTopRightRadius: "10px",
					padding: "10px",
				}}
			>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={10}>
						<ListItemText primary="Name" />
					</Grid>
					<Grid item xs={2}>
						<ListItemText primary="Actions" />
					</Grid>
				</Grid>
			</ListItem>
			<Divider component="li" />
			{requests.map(
				(request) =>
					request.status === 0 && (
						<React.Fragment key={request.participantId}>
							<ListItem>
								<Grid container spacing={2} alignItems="center">
									<Grid item xs={10}>
										<ListItemText primary={request.username} />
									</Grid>
									<Grid item xs={2}>
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
									</Grid>
								</Grid>
							</ListItem>
							{requests.indexOf(request) !== requests.length - 1 && (
								<Divider component="li" />
							)}
						</React.Fragment>
					)
			)}
		</List>
	);
};

export default RequestList;
