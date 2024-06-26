import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import { Message } from "./styles/Request.styled";

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

const GuestList = (props) => {
	const { requests } = props;

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
				</Grid>
			</ListItem>
			{requests.length === 0 ? (
				<div>
					<Divider component="li" />
					<Message>Request Empty</Message>
				</div>
			) : (
				<>
					<Divider component="li" />
					{requests.map((request, index) => (
						<React.Fragment key={index}>
							<ListItem>
								<Grid container spacing={2} alignItems="center">
									<Grid item xs={10}>
										<ListItemText primary={request.username} />
									</Grid>
									<Grid item xs={2}></Grid>
								</Grid>
							</ListItem>
							{requests.indexOf(request) !== requests.length - 1 && (
								<Divider component="li" />
							)}
						</React.Fragment>
					))}
				</>
			)}
		</List>
	);
};

export default GuestList;
