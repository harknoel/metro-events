import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ShowContainer } from "./styles/RolePopper.styled";
import axiosInstance from "../config/axiosInstance";

function RolePopover(props) {
	const { role, userId } = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const [userRole, setUserRole] = useState(role);
	const [loading, setLoading] = useState(false);

	const changeUserRole = async (newRole) => {
		try {
			setLoading(true);
			await axiosInstance.post(`/admins/${userId}/${newRole}`);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleRoleChange = (role) => {
		setUserRole(role);
		changeUserRole(role);
		handleClose();
	};

	const open = Boolean(anchorEl);
	const id = open ? "role-popover" : undefined;

	const borderRadius = 20;
	return (
		<div>
			<Button
				aria-describedby={id}
				variant="contained"
				onClick={handleClick}
				color={getColor(userRole)}
				sx={{ width: "100px", borderRadius: { borderRadius } }}
				disabled={loading}
			>
				{userRole}
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<div style={{ padding: "20px" }}>
					<ShowContainer>
						<Typography variant="h6">Select Role</Typography>
						<Button
							variant="contained"
							onClick={() => handleRoleChange("USER")}
							color={getColor("USER")}
							sx={{ width: "100px", borderRadius: { borderRadius } }}
						>
							User
						</Button>
						<Button
							variant="contained"
							onClick={() => handleRoleChange("ORGANIZER")}
							color={getColor("ORGANIZER")}
							sx={{ width: "100px", borderRadius: { borderRadius } }}
						>
							Organizer
						</Button>
						<Button
							variant="contained"
							onClick={() => handleRoleChange("ADMIN")}
							color={getColor("ADMIN")}
							sx={{
								width: "100px",
								borderRadius: { borderRadius },
							}}
						>
							Admin
						</Button>
					</ShowContainer>
				</div>
			</Popover>
		</div>
	);
}

function getColor(role) {
	switch (role) {
		case "USER":
			return "primary";
		case "ORGANIZER":
			return "secondary";
		case "ADMIN":
			return "error";
		default:
			return "default";
	}
}

export default RolePopover;
