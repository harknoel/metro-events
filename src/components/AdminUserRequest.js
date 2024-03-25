import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RequestList from "./RequestList";
import UserRole from "./UserRole";

export default function AdminUserRequest() {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const requests = [
		{ participantId: 1, username: "User1", status: 0 },
		{ participantId: 2, username: "User2", status: 1 },
		{ participantId: 3, username: "User3", status: 0 },
	];
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
					<RequestList requests={requests} />
				</TabPanel>
				<TabPanel value="2">
					<UserRole requests={requests} />
				</TabPanel>
			</TabContext>
		</Box>
	);
}
