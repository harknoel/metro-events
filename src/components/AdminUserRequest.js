import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RequestList from "./RequestList";
import axiosInstance from "../config/axiosInstance";
import UserRole from "./UserRole";
import { useState, useEffect } from "react";

export default function AdminUserRequest() {
	const [value, setValue] = useState("1");
	const [requests, setRequests] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	useEffect(() => {
		getRequests();
		getAllUsers();
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const getAllUsers = async () => {
		try {
			const response = await axiosInstance.get("/users");
			setAllUsers(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const updateUsers = async () => {
		try {
			await getAllUsers();
			return allUsers;
		} catch {}
	};

	const getRequests = async () => {
		try {
			const response = await axiosInstance("admins/organizer/requests");
			setRequests(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const acceptRequest = async (id) => {
		console.log(id);
		try {
			await axiosInstance.post("admins/organizer/accept", id);
			getRequests();
		} catch (error) {
			console.log(error);
		}
	};

	const declineRequest = async (id) => {
		try {
			await axiosInstance.post("admins/organizer/decline", id);
			getRequests();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box sx={{ width: "100%", typography: "body1" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Users" value="1" />
						<Tab label="Requests" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<RequestList
						requests={requests}
						acceptRequest={acceptRequest}
						declineRequest={declineRequest}
					/>
				</TabPanel>
				<TabPanel value="2">
					<UserRole requests={allUsers} updateUsers={updateUsers} />
				</TabPanel>
			</TabContext>
		</Box>
	);
}
