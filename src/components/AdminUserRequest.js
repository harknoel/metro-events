import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import RequestList from "./RequestList";

export default function AdminUserRequest() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const requests = [
    { id: 1, user: "Guest 1" },
    { id: 2, user: "Guest 2" },
    { id: 3, user: "Guest 3" },
  ];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Organizer" value="1" />
            <Tab label="Admin" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <RequestList requests={requests} />
        </TabPanel>
        <TabPanel value="2">
          <RequestList requests={requests} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
