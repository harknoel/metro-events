import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import Card from "../components/Card";

const Event = (props) => {
	const { event, showJoin } = props;
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const verifyEventOrganizer = () => {
		const username = localStorage.getItem("username");
		const organizer = event.owner;

		return username === organizer;
	};

	return (
		<div>
			<Card event={event} handleOpen={handleOpen} />
			<CustomModal
				event={event}
				open={open}
				handleClose={handleClose}
				showJoin={showJoin}
				showManage={verifyEventOrganizer()}
				setOpen={setOpen}
			/>
		</div>
	);
};

export default Event;
