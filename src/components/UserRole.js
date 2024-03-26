import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import { Message } from "./styles/Request.styled";
import Rolepopper from "./RolePopper";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axiosInstance from "../config/axiosInstance";

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

const UserRole = (props) => {
	const { requests, updateUsers } = props;
	const [selected] = useState("");
	const [shownUsers, setShownUsers] = useState(requests);

	const changeUserRole = async (newRole, userId) => {
		try {
			await axiosInstance.post(`/admins/${userId}/${newRole}`);
			await updateUsers();
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (event) => {
		const selectedRole = event.target.value;
		if (selectedRole !== "ALL") {
			const filtered = filterUsersByAuthority(selectedRole);
			setShownUsers(filtered);
		} else {
			setShownUsers(requests);
		}
	};

	function filterUsersByAuthority(selectedAuthority) {
		return requests.filter((user) => {
			return (
				user.authorities &&
				user.authorities.some(
					(authority) => authority.authority === selectedAuthority
				)
			);
		});
	}

	return (
		<div>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						label="Role"
						value={selected}
						onChange={handleChange}
					>
						<MenuItem value="ALL">
							<em>All</em>
						</MenuItem>
						<MenuItem value="USER">User</MenuItem>
						<MenuItem value="ORGANIZER">Organizer</MenuItem>
						<MenuItem value="ADMIN">Admin</MenuItem>
					</Select>
				</FormControl>
			</Box>
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
				{shownUsers.length === 0 ? (
					<div>
						<Divider component="li" />
						<Message>Request Empty</Message>
					</div>
				) : (
					<>
						<Divider component="li" />
						{shownUsers.map((request) => (
							<React.Fragment key={request.userId}>
								<ListItem>
									<Grid container spacing={2} alignItems="center">
										<Grid item xs={10}>
											<ListItemText primary={request.username} />
										</Grid>
										<Grid item xs={2}>
											<Rolepopper
												role={request.authorities[0].authority}
												userId={request.userId}
												changeUserRole={changeUserRole}
											/>
										</Grid>
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
		</div>
	);
};

export default UserRole;
