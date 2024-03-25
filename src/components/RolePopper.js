import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ShowContainer } from "./styles/RolePopper.styled";

function RolePopover() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [userRole, setUserRole] = useState("User");

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleRoleChange = (role) => {
		setUserRole(role);
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
							onClick={() => handleRoleChange("User")}
							color={getColor("User")}
							sx={{ width: "100px", borderRadius: { borderRadius } }}
						>
							User
						</Button>
						<Button
							variant="contained"
							onClick={() => handleRoleChange("Organizer")}
							color={getColor("Organizer")}
							sx={{ width: "100px", borderRadius: { borderRadius } }}
						>
							Organizer
						</Button>
						<Button
							variant="contained"
							onClick={() => handleRoleChange("Admin")}
							color={getColor("Admin")}
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
		case "User":
			return "primary";
		case "Organizer":
			return "secondary";
		case "Admin":
			return "error";
		default:
			return "default";
	}
}

export default RolePopover;
