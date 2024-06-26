import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
	LocalizationProvider,
	DatePicker,
	TimePicker,
} from "@mui/x-date-pickers";
import {
	Card,
	CardContent,
	TextField,
	Grid,
	Button,
	Typography,
} from "@mui/material";
import Container from "../components/styles/Container.styled";
import UserNav from "../components/UserNav";
import { Content } from "../components/styles/CreateEvent.styled";
import { useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
	const [eventName, setEventName] = useState("");
	const [dateStarted, setDateStarted] = useState(null);
	const [dateWillEnd, setDateWillEnd] = useState(null);
	const [timeStarted, setTimeStarted] = useState(null);
	const [timeWillEnd, setTimeWillEnd] = useState(null);
	const [description, setDescription] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			eventName.trim() === "" ||
			dateStarted === null ||
			dateWillEnd === null ||
			timeStarted === null ||
			timeWillEnd === null ||
			description.trim() === ""
		) {
			alert("Please fill in everything.");
			return;
		}
		createEvent();
	};

	const clear = () => {
		setEventName("");
		setDateStarted(null);
		setDateWillEnd(null);
		setTimeStarted(null);
		setTimeWillEnd(null);
		setDescription("");
	};

	function formatTime(timeString) {
		const date = new Date(timeString);
		return date.toLocaleTimeString("en-US", {
			hour12: true,
			hour: "numeric",
			minute: "2-digit",
		});
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const year = date.getFullYear();
		return `${month.toString().padStart(2, "0")}/${day
			.toString()
			.padStart(2, "0")}/${year}`;
	}

	const navigate = useNavigate();

	const createEvent = async () => {
		const username = localStorage.getItem("username");
		try {
			await axiosInstance.post("/organizers/create/event", {
				owner: username,
				title: eventName,
				timeStart: formatTime(timeStarted),
				timeEnd: formatTime(timeWillEnd),
				dateStart: formatDate(dateStarted),
				dateEnd: formatDate(dateWillEnd),
				description: description,
			});
			alert("Successfully created event.");
			navigate("/organizer");
			clear();
		} catch (error) {}
	};

	return (
		<div>
			<UserNav />
			<Content>
				<Container>
					<Card variant="outlined">
						<CardContent>
							<Typography variant="h5" gutterBottom>
								Create Event
							</Typography>
							<form onSubmit={handleSubmit}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label="Event Name"
											value={eventName}
											onChange={(event) => setEventName(event.target.value)}
											required
										/>
									</Grid>
									<Grid item xs={12}>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<Grid container spacing={2}>
												<Grid item xs={12} sm={6}>
													<DatePicker
														sx={{ width: "100%" }} // Set width to 100%
														label="Date Started"
														value={dateStarted}
														onChange={(newValue) => setDateStarted(newValue)}
														TextField={(params) => <TextField {...params} />}
													/>
												</Grid>
												<Grid item xs={12} sm={6}>
													<TimePicker
														sx={{ width: "100%" }} // Set width to 100%
														label="Time Started"
														value={timeStarted}
														onChange={(newValue) => setTimeStarted(newValue)}
														TextField={(params) => <TextField {...params} />}
													/>
												</Grid>
												<Grid item xs={12} sm={6}>
													<DatePicker
														sx={{ width: "100%" }} // Set width to 100%
														label="Date Will End"
														value={dateWillEnd}
														onChange={(newValue) => setDateWillEnd(newValue)}
														TextField={(params) => <TextField {...params} />}
													/>
												</Grid>
												<Grid item xs={12} sm={6}>
													<TimePicker
														sx={{ width: "100%" }} // Set width to 100%
														label="Time Will End"
														value={timeWillEnd}
														onChange={(newValue) => setTimeWillEnd(newValue)}
														TextField={(params) => <TextField {...params} />}
													/>
												</Grid>
											</Grid>
										</LocalizationProvider>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											label="Description"
											multiline
											rows={4}
											value={description}
											onChange={(event) => setDescription(event.target.value)}
											required
										/>
									</Grid>
									<Grid item xs={12}>
										<Button type="submit" variant="contained" color="primary">
											Submit
										</Button>
									</Grid>
								</Grid>
							</form>
						</CardContent>
					</Card>
				</Container>
			</Content>
		</div>
	);
}
