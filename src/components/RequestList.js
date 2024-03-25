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
	borderRadius: 2,
	border: "1px solid",
	borderColor: "divider",
	backgroundColor: "background.paper",
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
					backgroundColor: "#6462F1",
					borderTopLeftRadius: "5px",
					borderTopRightRadius: "5px",
					padding: "10px",
				}}
			>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={10}>
						<ListItemText primary="Name" sx={{ color: "#ffffff" }} />
					</Grid>
					<Grid item xs={2}>
						<ListItemText primary="Actions" sx={{ color: "#ffffff" }} />
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
							<Divider component="li" />
						</React.Fragment>
					)
			)}
		</List>
	);
};

export default RequestList;
